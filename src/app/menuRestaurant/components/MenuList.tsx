import Image from "next/image";

import menus from "../../data/menu.json";
import styles from "../../styles/index.module.scss";

interface Menu {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

const MenuList: React.FC = () => {
  return (
    <section className={styles.menuContainer}>
      <div className={styles.animeContainer}>
        {menus.map((menu: Menu) => (
          <article key={menu.id}>
            <figure>
              <Image
                src={menu.imagen}
                alt={`Imagen de ${menu.nombre}`}
                width={350}
                height={300}
                loading="lazy"
              />
              <figcaption>{menu.nombre}</figcaption>
            </figure>
            <p id={`menu-description-${menu.id}`}>{menu.descripcion}</p>
            <p aria-live="polite">Precio: ${menu.precio.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MenuList;
