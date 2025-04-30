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

          <ul className=" hidden lg:flex">
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
        </div>
      </header>
    </>
  );
};

export default Header;
