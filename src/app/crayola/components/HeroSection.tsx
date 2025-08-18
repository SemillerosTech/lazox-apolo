import Image from "next/image";
import React from "react";
import familiaCrayola from "../../assets/crayola/compras-en-familia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-crayola text-white pt-16 lg:py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <div className="bg-[var(--crayolaYellow)] text-[var(--crayolaGreen)] px-3 py-5 rounded-lg mb-8 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Productos Crayola Originales al PRECIO MÁS BAJO de CDMX
            </h1>
            <p className="text-xl text-center">
              Precios especiales de fábrica solo en compra de paquete escolar
              completo
              <br />
              40 años sirviendo a familias como la tuya
            </p>
          </div>

          <div className="flex flex-row gap-4 mb-8">
            <a
              href="#ubicacion"
              className="bg-white text-[var(--crayolaGreen)] text-xl font-bold py-3 px-6 rounded-full text-center hover:bg-gray-100 transition w-1/2"
            >
              Visítanos!
            </a>
            <a
              href="https://wa.me/"
              className="bg-[var(--crayolaGreen)] flex justify-center items-center gap-x-2 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-green-600 text-xl transition w-1/2"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5" />
              Contáctanos
            </a>
          </div>

          {/* <div className="bg-[#00502e] text-[#ffcc33] px-4 py-2 rounded-full font-bold text-2xl lg:w-8/12 mx-auto text-center">
            40 años de experiencia
          </div> */}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={familiaCrayola}
            alt="Familia difrutando los productos de crayola"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
