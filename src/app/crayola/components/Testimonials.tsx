import React from "react";
import Image from "next/image"; // <-- IMPORTAR Image
import { Testimonial } from "../../types/crayola";
import testimonialOne from "../../assets/crayola/testimonial1.jpeg";
import testimonialTwo from "../../assets/crayola/testimonal2.jpeg";
import testimonialThree from "../../assets/crayola/testimonial3.jpeg";

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Llevo 5 años comprando aquí los útiles de mis 3 hijos. La calidad y el precio no se comparan con ningún lado",
      author: "María González",
      role: "mamá de Sofía, Carlos y Ana",
      image: testimonialOne,
    },
    {
      quote:
        "En Didacty siempre me asesoran bien y me arman el paquete completo sin que me falte nada",
      author: "Roberto Hernández",
      role: "papá de Miguel",
      image: testimonialTwo,
    },
    {
      quote:
        "Los productos Crayola que venden son originales, mis hijos están felices con sus colores",
      author: "Carmen López",
      role: "mamá de Fernanda",
      image: testimonialThree,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--crayolaGreen)]">
          Lo Que Dicen Las Familias de CDMX
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">{testimonial.author}</h4>
                  <p className="text-gray-600 text-lg">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
