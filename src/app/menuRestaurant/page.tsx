'use client'

import { NextPage } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

import styles from "../styles/index.module.scss";

const DynamicMenuList = dynamic(() => import("./components/MenuList"));

const menuRestaurant: NextPage = () => {
  return (
    <>
      <header className="encabezado">
        <h1>MARTES</h1>
        <Image className={styles.logo} src={"/logo.jpeg"}  width={450} height={300} alt="logo" />
      </header>
      <DynamicMenuList />
      <Link href={"/"}>Home</Link>
    </>
  );
};

export default menuRestaurant;