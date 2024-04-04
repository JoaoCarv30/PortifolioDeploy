import { HiBars4 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import { NavMob } from "../navMob";


export function Header() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <>
    <header className="bg-black p-4 text-white font-extrabold text-xl static">
      <nav className="container flex items-center justify-between">
        <h1 className="text-2xl">
          João <span className="text-personal-color-rose">Victor</span>
        </h1>

        {menu ? <IoMdClose className="md:hidden text-4xl" onClick={handleMenu} /> : <HiBars4 className="md:hidden text-4xl" onClick={handleMenu} />}
       
        <ul className="hidden md:flex md:items-center md:gap-20">
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Skills</li>
          </a>
          <a href="">
            <li>Projects</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
     {menu && <NavMob />} {/* Correção aqui */}
     </>
  );
}
