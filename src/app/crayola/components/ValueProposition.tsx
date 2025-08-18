import React from "react";

const ValueProposition: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--crayolaGreen)]">
          ¿Por Qué Didacti?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "✓",
              title: "Productos 100% Originales Garantizados",
              description: "Directamente de fábrica Crayola Binney & Smith",
            },
            {
              icon: "✓",
              title: "Precios Especiales de Fábrica",
              description:
                "Solo disponibles en compra de paquete escolar completo",
            },
            {
              icon: "✓",
              title: "15 Años de Experiencia Familiar",
              description: "Confiabilidad y tradición en nuestro servicio",
            },
            {
              icon: "✓",
              title: "Asesoría Personalizada Sin Costo",
              description: "Te ayudamos a armar la lista perfecta para tu hijo",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center"
            >
              <div className="text-[var(--crayolaGreen)] text-6xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
