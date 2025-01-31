import { NextPage } from "next";
import Link from "next/link";

import Logo from "../components/Logo";

const Home: NextPage = () => {
  return <>
  <Logo />
 <section>
 <button><Link href={"/menuRestaurant"}>Menu Restaurante</Link></button>
 <button><Link href={"/portafolio"}>Portafolio</Link></button>
 </section>
  </>
}

export default Home;