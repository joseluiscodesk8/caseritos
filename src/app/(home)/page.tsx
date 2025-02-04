"use client";

import { NextPage } from "next";
import Link from "next/link";
import Logo from "../components/Logo";

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
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
