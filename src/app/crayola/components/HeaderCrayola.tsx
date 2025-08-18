import Image from "next/image";
import React from "react";
import logoDidacti from "../../assets/didacti-logo.svg";

const HeaderCrayola = () => {
  return (
    <header className="p-3 flex justify-center sticky top-0 z-10 bg-white">
      <Image src={logoDidacti} alt="logo didacti" className="w-[200px]" />
    </header>
  );
};

export default HeaderCrayola;
