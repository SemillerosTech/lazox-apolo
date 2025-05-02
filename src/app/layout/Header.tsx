import Image from "next/image";
import React from "react";
import logoLazox from "../../../public/logo-lazox.svg";
import Sidenav from "./Sidenav";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-lg flex items-center justify-center  sticky w-full top-0 left-0 z-20 ">
        <Sidenav />

        <div
          className="lg:container lg:mx-auto flex justify-between items-center
        "
        >
          <Image
            className="w-[200px]"
            src={logoLazox}
            alt="Next.js logo"
            priority
          />

          <ul className="hidden lg:flex">
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
        </div>
      </header>
    </>
  );
};

export default Header;
