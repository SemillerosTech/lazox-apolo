import Image from "next/image";
import React from "react";
import logoLazox from "../../../public/logo-lazox.svg";
import mobileMenu from "../../../public/mobile-menu.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-lg flex items-center justify-center sticky w-full top-0 left-0 z-10">
      <Image
        className="w-[40px] absolute top-3 left-2"
        src={mobileMenu}
        alt="Next.js logo"
        priority
      />
      <Image
        className="w-[200px]"
        src={logoLazox}
        alt="Next.js logo"
        priority
      />
    </header>
  );
};

export default Header;
