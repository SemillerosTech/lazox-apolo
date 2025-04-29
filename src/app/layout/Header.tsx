import Image from "next/image";
import React from "react";
import logoLazox from "../../../public/logo-lazox.svg";
import Sidenav from "./Sidenav";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-lg flex items-center justify-center sticky w-full top-0 left-0 z-20">
        <Sidenav />
        <Image
          className="w-[200px]"
          src={logoLazox}
          alt="Next.js logo"
          priority
        />
      </header>
    </>
  );
};

export default Header;
