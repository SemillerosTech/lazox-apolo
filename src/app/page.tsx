import Image from "next/image";
import Header from "./layout/Header";
import greene from "../../public/greene.svg";
import bomby from "../../public/bomby.svg";

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-teal-600 h-[calc(100vh-62px)] flex justify-center items-center relative overflow-hidden">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all">
          Conoce Lazox
        </button>

        <Image
          className="absolute -bottom-28 -left-10  w-[180px] rotate-45"
          src={greene}
          alt="Grene"
        />
      </section>

      <section className="bg-[var(--primary)] h-screen relative">
        <Image className="absolute -right-10 -top-20" src={bomby} alt="Grene" />
      </section>
    </>
  );
}
