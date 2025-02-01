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
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRtgDAABXRUJQVlA4WAoAAAAgAAAAvgAAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg6gEAANASAJ0BKr8AugA+7XCvUb++KaKnNItL8B2JZ27f/weP/LEL1FXlyn8xAqJZCndFbEdLYEtUEla3GdwxoRI+iDVp95aAn0U+WBKqG+uApXWB8xOuHL3f70suxo0ZC3Nz3GkYD6BzoeksPvqVz0P9O62XcxA/LcuUBeFYNHg7g/6Al6j4bsAvEU7n4qkTmeuUp7NkA+EU1FQhUs4rm1nywAD237MCdqV40uaYTfOZcROX1fpioPQUJLXO+twHWIsCVUX+pm3Kvrh979cTPzTQdJtCximMLxaugRReH3LtIOumiEGeoU0HzzHHALtJlfSBTtNj1hDPOSuGmmPJAwSwaWc+T7N+c0h/UrNoG+ocmg7l8ussaWiqBN5s7U0X+SR0meTaKXKkZVP9wjKS+cbEpW77k0SaQEo9TeYgxIBEvRqsnem9zjYQk7DYNW9IVtjaM1xwuh42qd2+H0YhojfsCjAAqyjedJxSaQ3pY49ViayXUFNhRq5XGr9PiEZFkBCYnXC7vR+rVI4ZgB4e18hw2BmcGq3tgFRyJeG87ZP8/AtiAHqRPu50eOk3yXyMkpcMwthGWdv+Z1mgDRZ2ylGfw8EQlCm3c04lCbXXMrI0KIQM6F/9YQGc2OPGJMX1G97IWPt/nhas/MkugAA="
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
