import React from "react";

const FinalCTA: React.FC = () => {
  return (
    <section
      className="py-16 bg-[var(--crayolaGreen)] text-white"
      id="ubicacion"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Visítanos Hoy Mismo
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🏪</span> UBICACIÓN
            </h3>
            <p className="mb-6">
              Calz. de Tlalpan 1552, sineo, Miravalle, Benito Juárez, 03580
              Ciudad de México, CDMX
            </p>

            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">📞</span> CONTACTO
            </h3>
            <p className="mb-2">Teléfono: 55 5532 2252</p>
            <p className="mb-6">WhatsApp: 56 1072 2202</p>

            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">⏰</span> HORARIOS
            </h3>
            <p className="mb-2">Lunes a Sábado: 10:00 AM - 7:00 PM</p>
            <p>Domingos: 10:00 AM - 5:00 PM</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://maps.app.goo.gl/4QVqbAjkjip17qmYA"
                target="_blank"
                className="bg-white text-[var(--crayolaGreen)] font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition"
              >
                CÓMO LLEGAR
              </a>
              <a
                href="https://wa.me/+525610722202"
                target="_blank"
                className="bg-[var(--crayolaGreen)] text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-green-600 transition"
              >
                ENVIAR WHATSAPP
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1879441598808!2d-99.1426649!3d19.361013099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe2d368a9ffd%3A0x695fbc5051c8cf54!2sDidacti!5e0!3m2!1ses!2smx!4v1755478143932!5m2!1ses!2smx"
                width="600"
                height="450"
                allow-fullscreen=""
                loading="lazy"
                referrer-policy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
