"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface AnimatedScrollElementProps {
  imagen?: string;
  alt?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode; // Permite renderizar cualquier contenido dentro
  animation?: string; // Permite cambiar la animación de Animate.css
}

const AnimatedScrollElement: React.FC<AnimatedScrollElementProps> = ({
  imagen,
  alt = "Imagen animada",
  width = 500,
  height = 300,
  children,
  animation = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Se activa la animación cuando el 75% del elemento es visible
        setIsVisible(rect.top <= windowHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar inmediatamente

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? `animate__animated ${animation}` : "opacity-0"
      }`}
    >
      {imagen ? (
        <Image
          src={imagen}
          alt={alt}
          width={width}
          height={height}
          layout="intrinsic"
        />
      ) : (
        children
      )}
    </div>
  );
};

export default AnimatedScrollElement;
