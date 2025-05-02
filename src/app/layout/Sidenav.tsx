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
        className="w-[40px] absolute top-3 left-2 md:hidden"
        src={mobileMenu}
        alt="Next.js logo"
        priority
        onClick={() => setIsOpen(true)}
      />

      <aside
        className={`fixed top-0 -left-[500px] bg-[var(--primary)] z-30 w-full h-full text-white  items-center justify-center text-4xl flex flex-col transition-all md:hidden ${
          isOpen === true ? "left-0" : "-left-[500px]"
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
          <li>
            <a
              href="#home"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#lazox"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Conoce Lazox
            </a>
          </li>
          <li>
            <a
              href="#reason"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#reason"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Nuestra razón de ser
            </a>
          </li>
          <li>
            <a
              href="#mision"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Nuestra Misión
            </a>
          </li>
          <li>
            <a
              href="#values"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Nuestros Valores
            </a>
          </li>
          <li>
            <a
              href="#logoteraphy"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Logoterapia
            </a>
          </li>
          <li>
            <a
              href="#logogame"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Logoteca
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="p-3 hover:bg-amber-300 focus:bg-amber-300 rounded-full block"
            >
              Contacto
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidenav;
