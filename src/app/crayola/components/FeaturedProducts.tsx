import React from "react";
import { Product } from "../../types/crayola";
import pencil from "../../assets/crayola/pencil-box.jpg";
import Image from "next/image";

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      name: "Crayones Crayola x 24",
      price: "$120",
      image: pencil,
    },
    {
      name: "Plumones Crayola x 12",
      price: "$180",
      image: pencil,
    },
    {
      name: "Témperas Crayola x 6",
      price: "$210",
      image: pencil,
    },
    {
      name: "Lápices de colores x 12",
      price: "$95",
      image: pencil,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-[var(--crayolaGreen)]">
          Productos Crayola Originales Seleccionados
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Estos precios no los encontrarás en ningún otro lado
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="aspect-square bg-gray-200 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-2xl">{product.name}</h3>
              <p className="text-[var(--crayolaGreen)] font-bold text-2xl">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-red-500 font-medium text-2xl">
          ⚠️ IMPORTANTE: Precios especiales válidos únicamente en compra de
          paquete escolar
        </p>
      </div>
    </section>
  );
};

export default FeaturedProducts;
