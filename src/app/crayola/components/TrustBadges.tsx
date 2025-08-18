import Image from "next/image";
import React from "react";
import logoCrayola from "../../../../public/crayola-logo.webp";

const TrustBadges: React.FC = () => {
  return (
    <div className="shadow-xl py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 text-xl">
          <div className="flex items-center flex-col">
            <Image
              src={logoCrayola}
              className="w-[200px]"
              alt="Logo Crayola "
            />
          </div>

          <div className="flex items-center">
            <div className="bg-blue-100 text-[var(--crayolaGreen)] rounded-full w-8 h-8 flex items-center justify-center mr-2">
              ✓
            </div>
            <span className="text-[var(--crayolaGreen)]">
              15 años sirviendo familias
            </span>
          </div>

          <div className="flex items-center">
            <div className="bg-blue-100 text-[var(--crayolaGreen)] rounded-full w-8 h-8 flex items-center justify-center mr-2">
              ✓
            </div>
            <span className="text-[var(--crayolaGreen)]">
              Productos 100% originales garantizados
            </span>
          </div>

          <div className="flex items-center">
            <div className="bg-blue-100 text-[var(--crayolaGreen)] rounded-full w-8 h-8 flex items-center justify-center mr-2">
              ✓
            </div>
            <span className="text-[var(--crayolaGreen)]">
              Empresa familiar mexicana
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
