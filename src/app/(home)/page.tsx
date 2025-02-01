"use client";

import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../components/Logo";

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Imagen de fondo animada */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      >
        <Image
          src="/tres.jpeg" // Cambia la ruta por la de tu imagen
          alt="Fondo animado"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Logo />
        <section className="flex gap-4 mt-6">
          <button className="px-4 py-2 bg-gray-800 rounded-lg">
            <Link href="/menuRestaurant">Menu Restaurante</Link>
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg">
            <Link href="/portafolio">Portafolio</Link>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
