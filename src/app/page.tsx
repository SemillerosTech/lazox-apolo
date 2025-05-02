import Image from "next/image";
import Header from "./layout/Header";
import greene from "../../public/greene.svg";
import lazoxWhite from "../../public/logo-lazox-whit.svg";
import trianguli from "../../public/triangu.svg";
import seedy from "../../public/seedy.svg";
import circuli from "../../public/circuli.svg";
import bomby from "../../public/bomby.svg";
import yellowCross from "../../public/yellow-cros.svg";
import yellySurprise from "../../public/yelly-surprise.svg";
import greenHeart from "../../public/green-heart.svg";
import smileface from "../../public/smileface.svg";
import friends from "../../public/happy-three-friends.svg";
import lokini from "../../public/yelly.svg";
import makeSense from "../../public/make-sense.svg";
import space from "../../public/espacio-ludico.png";

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-banner h-[calc(100vh-62px)] flex flex-col justify-center items-center relative overflow-hidden">
        <button className="bg-[var(--primary)] text-white p-6 rounded-full  hover:bg-red-700 transition-all shadow-xl shadow-2xl">
          <b className="text-5xl ">Conoce LAZOX</b>
        </button>

        <p className="text-center mt-10 text-white text-2xl text-shadow-lg">
          Bienvenidos a LAZOX, un espacio donde el juego <br /> y el sentido de
          la vida se entrelazan para fortalecer los lazos familiares.
        </p>

        <Image
          className="absolute -bottom-28 -left-10  w-[180px] rotate-45 floating-image-b"
          src={greene}
          alt="Grene"
        />
      </section>

      <section className="bg-[var(--primary)] min-h-screen relative pt-32 flex flex-col items-center justify-center">
        <div className="container mx-auto px-5 mb-10">
          <Image className="absolute right-0 -top-20" src={bomby} alt="Grene" />

          <Image
            className="absolute top-40 left-10"
            src={yellowCross}
            alt="Grene"
          />

          <Image
            className="absolute top-56 right-10"
            src={greenHeart}
            alt="Grene"
          />

          <h1 className="text-white text-5xl text-center">¿Qué es LAZOX?</h1>

          <p className="text-white text-4xl text-center mt-10 lg:max-w-3xl md:mx-auto">
            Somos un espacio lúdico que acompaña a las familias en el camino a
            construir LAZOX familiares.
          </p>
        </div>

        <Image
          className="absolute -bottom-20 right-0 w-[50%] md:w-[200px]"
          src={lokini}
          alt="Trianguli "
        />
      </section>

      <section className="relative pt-32 pb-56 px-5 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl text-center text-[var(--primary)]">
          ¿Cuál es nuestra razón de ser?
        </h1>

        <Image
          className="floating-image-t relative"
          src={trianguli}
          alt="Trianguli "
        />

        <p className="text-3xl text-center text-[var(--secondary)] lg:max-w-3xl md:mx-auto">
          Mejorar el entorno social y emocional de las familias, ofreciendo un
          espacio seguro y diseñado especificamente para este proposito
        </p>

        <div className="w-full flex justify-center -bottom-44 absolute z-10">
          <Image className="" src={seedy} alt="Trianguli " />
        </div>
      </section>

      <section className="relative pt-32 px-5 flex flex-col items-center justify-center min-h-screen bg-amber-300">
        <h1 className="text-5xl text-center text-[var(--primary)]">
          Nuestra misión es:
        </h1>

        <p className="text-3xl text-center text-[var(--primary)] lg:max-w-3xl md:mx-auto">
          Apoyar el desarrolo de seres autónomos y autocríticos que tengan las
          herramientas para funcionar en su entrono familiar cercano y social
        </p>
      </section>

      <section className="relative pt-32 py-5 flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-5xl text-center text-[var(--secondary)] mb-10">
          Nuestros Valores
        </h1>

        <div className="w-full py-4">
          <article className="md:text-4xl bg-[var(--secondary)] text-white text-3xl rounded-r-full p-5 pr-10 md:pr-20 border-2 border-black w-[70%] flex justify-end leading-none -left-1 relative">
            Conexión <br /> y empatía
          </article>
        </div>

        <div className="w-full py-4 flex justify-end">
          <article className="md:text-4xl bg-[var(--secondary)] text-white text-3xl rounded-l-full p-5 pl -10 md:pl-20 border-2 border-black w-[70%] flex justify-start leading-none -right-1 relative">
            Pensamiento <br /> crítico
          </article>
        </div>

        <div className="w-full py-4">
          <article className="md:text-4xl bg-[var(--secondary)] text-white text-3xl rounded-r-full p-5 pr-10 md:pr-20 border-2 border-black w-[70%] flex justify-end leading-none -left-1 relative">
            Discernimiento
            <br /> y proactividad
          </article>
        </div>

        <div className="w-full py-4 flex justify-end relative">
          <article className="bg-[var(--secondary)] text-white text-3xl rounded-l-full p-5 pl -10 border-2 border-black w-[70%] flex justify-start leading-none -right-1 relative">
            <Image className="" src={smileface} alt="Trianguli " />
          </article>
        </div>

        <h1 className="text-5xl text-center text-[var(--primary)] mt-10 mb-5">
          Creemos que
        </h1>

        <p className="text-3xl text-center text-[var(--secondary)] my-10 lg:max-w-3xl md:mx-auto">
          Las familias sanas construyen sociedades funcionales y preparadas para
          las demandas presentas y futuras
        </p>

        <div className="flex justify-center">
          <Image className="mb-24 animate-spin" src={circuli} alt="Circuli " />
        </div>
      </section>

      <section className="bg-[var(--primary)] relative py-32 px-5 flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-5xl text-center text-white mb-10">
          ¿Qué es la logoterapia?
        </h1>

        <Image
          className="mb-10 w-[70%] md:w-[300px] relative floating-image-t"
          src={makeSense}
          alt="Circuli "
        />

        <p className="text-3xl  text-white mb-5 lg:max-w-3xl md:mx-auto text-center">
          Expresar emociones, deseos y pensamientos de una manera más accesible;
          es decir hacer descubrimientos y exploraciones existenciales
        </p>
      </section>

      <section className="relative pt-32 px-5 flex flex-col items-center justify-center min-h-screen bg-amber-300">
        <h1 className="text-5xl text-center text-[var(--primary)]">
          ¿Que es un espacio lúdico?
        </h1>

        <Image
          className="mb-10 w-90% lg:w-[600px] "
          src={space}
          alt="Space"
          style={{
            maskImage: "linear-gradient(to bottom, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 80%, transparent)",
          }}
        />

        <p className="text-3xl text-center text-[var(--primary)] lg:max-w-3xl md:mx-auto">
          Se refiere a áreas habilitadas para fomentar la socialización y
          creatividad a través del juego
        </p>
      </section>

      <section className="relative pt-32 pb-20 px-5 flex flex-col items-center justify-center min-h-screen bg-[var(--secondary)] text-center">
        <h1 className="text-5xl text-center text-white mb-10">
          El juego y la logoterapia
        </h1>

        <Image
          className="mb-10 relative floating-image-t"
          src={friends}
          alt="Circuli "
        />

        <p className="text-3xl  text-white mb-5 lg:max-w-3xl md:mx-auto">
          Expresar emociones, deseos y pensamientos de una manera más accesible;
          es decir hacer descubrimientos y exploraciones existenciales
        </p>

        <p className="text-3xl  text-white mb-5 lg:max-w-3xl md:mx-auto">
          Se pueden aprender herramientas y habilidades interpersonales para el
          crecimiento personal y el desarrollo del potencial humano.
        </p>

        <p className="text-3xl  text-white lg:max-w-3xl md:mx-auto">
          Se pueden facilitar la aplicación práctica de las reflexiones o
          descrubrimientos durante el proceso terapéutico, ayudando a las
          personas a integrar un sentido más profundo de propósito y significado
          en sus vidas.
        </p>
      </section>

      <footer className="relative pt-48 px-5 flex flex-col items-center justify-center min-h-screen bg-[var(--primary)] text-white text-2xl overflow-hidden ">
        <Image className="" src={lazoxWhite} alt="Circuli " />

        <p> 55 2118 7365</p>
        <p>rossy@semillerosdesentido.org</p>
        <p>Síguenos en:</p>

        <Image
          className="-bottom-[200px] relative floating-image-footer"
          src={yellySurprise}
          alt="Circuli "
        />
      </footer>
      {/* <NotDeskTop /> */}
    </>
  );
}
