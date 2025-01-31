import { RefObject } from "react";
import { useDomEvent, MotionValue, animate } from "framer-motion";
import { mix } from "framer-motion";
import debounce from "lodash/debounce";

interface Constraints {
  top: number;
  bottom: number;
}

const deltaThreshold = 5;
const elasticFactor = 0.2;

function springTo(value: MotionValue<number>, from: number, to: number) {
  if (value.isAnimating()) return;

  value.start(complete => {
    const animation = animate(value, to, {
      type: "spring",
      velocity: value.getVelocity(),
      stiffness: 400,
      damping: 40,
      onComplete: complete
    });

    return () => animation.stop();
  });
}

const debouncedSpringTo = debounce(springTo, 100);

export function useWheelScroll(
  ref: RefObject<Element>,
  y: MotionValue<number>,
  constraints: Constraints | null,
  onWheelCallback: (e: WheelEvent) => void,
  isActive: boolean
) {
  const onWheel = (event: WheelEvent) => {
    event.preventDefault();

    const currentY = y.get();
    let newY = currentY - event.deltaY;
    let startedAnimation = false;
    const isWithinBounds =
      constraints && newY >= constraints.top && newY <= constraints.bottom;

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor);

      if (newY < constraints.top) {
        if (event.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.top);
        }
      }

      if (newY > constraints.bottom) {
        if (event.deltaY >= -deltaThreshold) {
          springTo(y, newY, constraints.bottom);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.bottom);
        }
      }
    }

    if (!startedAnimation) {
      y.stop();
      y.set(newY);
    } else {
      debouncedSpringTo.cancel();
    }

    onWheelCallback(event);
  };

  useDomEvent(ref, "wheel", isActive && onWheel, { passive: false });
}
