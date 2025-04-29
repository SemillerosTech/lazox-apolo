"use client";

import React, { useState } from "react";
import Image from "next/image";
import logoLazoxWhite from "../../../public/logo-lazox-whit.svg";
import mobileMenu from "../../../public/mobile-menu.svg";

interface navState {
  open?: boolean;
}

const Sidenav: React.FC<navState> = ({ open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <>
      <Image
        className="w-[40px] absolute top-3 left-2"
        src={mobileMenu}
        alt="Next.js logo"
        priority
        onClick={() => setIsOpen(true)}
      />

      <aside
        className={`fixed top-0 left-0 bg-[var(--primary)] z-30 w-full h-full text-white  items-center justify-center text-4xl  flex-col ${
          isOpen === true ? "flex" : "hidden"
        } `}
      >
        <span
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          X
        </span>
        <Image
          className="w-[80%]"
          src={logoLazoxWhite}
          alt="Logo Lazoxwhite "
          priority
        />

        <ul className="flex gap-y-1 flex-col">
          <li className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full">
            Conoce Lazox
          </li>
          <li className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full">
            Servicios
          </li>
          <li className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full">
            Nuestra razón de ser
          </li>
          <li className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full">
            Nuestra Misión
          </li>
          <li className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full">
            Nuestros Valores
          </li>
          <li className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full">
            Contacto
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidenav;
