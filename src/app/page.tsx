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
// import AnimatedScrollElement from "./components/AnimatedScrollElement/AnimatedScrollElement";

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-banner h-[calc(100vh-62px)] flex justify-center items-center relative overflow-hidden">
        <button className="bg-[var(--primary)] text-white p-6 rounded-full  hover:bg-red-700 transition-all shadow-xl">
          <b className="text-5xl">Conoce LAZOX</b>
        </button>

        <Image
          className="absolute -bottom-28 -left-10  w-[180px] rotate-45"
          src={greene}
          alt="Grene"
        />
      </section>

      <section className="bg-[var(--primary)] min-h-screen relative pt-32 px-5 flex flex-col items-center justify-center">
        <div className="container mx-auto">
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

          <p className="text-white text-4xl text-center mt-10">
            Somos un espacio lúdico que acompaña a las familias en el camino a
            construir LAZOX familiares.
          </p>
        </div>
      </section>

      <section className="relative pt-32 pb-56 px-5 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl text-center text-[var(--primary)]">
          ¿Cuál es nuestra razón de ser?
        </h1>

        <Image className="" src={trianguli} alt="Trianguli " />

        <p className="text-3xl text-center text-[var(--secondary)]">
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

        <p className="text-3xl text-center text-[var(--primary)]">
          Apoyar el desarrolo de seres autónomos y autocríticos que tengan las
          herramientas para funcionar en su entrono familiar cercano y social
        </p>
      </section>

      <section className="relative pt-32 py-5 flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-5xl text-center text-[var(--secondary)] mb-10">
          Nuestros Valores
        </h1>

        <div className="w-full py-4">
          <article className="bg-[var(--secondary)] text-white text-3xl rounded-r-full p-5 pr-10 border-2 border-black w-[70%] flex justify-end leading-none -left-1 relative">
            Conexión <br /> y empatía
          </article>
        </div>

        <div className="w-full py-4 flex justify-end">
          <article className="bg-[var(--secondary)] text-white text-3xl rounded-l-full p-5 pl -10 border-2 border-black w-[70%] flex justify-start leading-none -right-1 relative">
            Pensamiento <br /> crítico
          </article>
        </div>

        <div className="w-full py-4">
          <article className="bg-[var(--secondary)] text-white text-3xl rounded-r-full p-5 pr-10 border-2 border-black w-[70%] flex justify-end leading-none -left-1 relative">
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

        <p className="text-3xl text-center text-[var(--secondary)] my-10">
          Las familias sanas construyen sociedades funcionales y preparadas para
          las demandas presentas y futuras
        </p>

        <Image className="mb-24" src={circuli} alt="Circuli " />
      </section>

      <section className="relative pt-32 px-5 flex flex-col items-center justify-center min-h-screen bg-[var(--secondary)]">
        <h1 className="text-5xl text-center text-white">
          Nuestra razón de ser
        </h1>

        <p className="text-3xl text-center text-white">
          Mejorar el entorno social y emocional de las familias ofreciendo un
          espacio seguro y diseñado específicamente para ee propósito
        </p>
      </section>

      <footer className="relative pt-48 px-5 flex flex-col items-center justify-center min-h-screen bg-[var(--primary)] text-white text-2xl overflow-hidden ">
        <Image className="" src={lazoxWhite} alt="Circuli " />

        <p> 55 2118 7365</p>
        <p>rossy@semillerosdesentido.org</p>
        <p>Síguenos en:</p>

        <Image
          className="-bottom-[200px] relative"
          src={yellySurprise}
          alt="Circuli "
        />
      </footer>
      {/* <NotDeskTop /> */}
    </>
  );
}
