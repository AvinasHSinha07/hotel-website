"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBarsStaggered, FaArrowDown, FaX } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/alex-machado-80sv993lUKI-unsplash.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1A4A4D] opacity-90"></div>

        <div>
          <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-8 lg:px-24 md:py-8 z-40">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                width={200}
                height={250}
                alt="Hotel 1"
                className="md:w-20 md:h-20 w-12 h-12"
              
              />
            </div>

            <div className="hidden md:flex space-x-8 font-vonique text-white">
              <a href="#hotel" className="hover:text-gray-300">
                Hotel
              </a>
              <a href="#restaurant" className="hover:text-gray-300">
                Restaurant
              </a>
              <a href="#ihr-anlass" className="hover:text-gray-300">
                Ihr Anlass
              </a>
              <a href="#uber-uns" className="hover:text-gray-300 -mt-1">
                <span className="font-poppins ">Ü</span>
                <span className="font-vonique">ber uns</span>
              </a>
            </div>

            <div className="flex space-x-4 z-50 md:hidden">
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white flex hover:text-gray-300"
              >
                {isMenuOpen ? <FaX size={24} /> : <FaBarsStaggered size={24} />}
              </a>
            </div>
          </div>

          {isMenuOpen && (
            <div className="fixed font-vonique inset-0 bg-black opacity-70  z-30 flex flex-col items-center justify-center transition duration-300 ease-in-out">
              <div className="text-white text-center space-y-8 text-2xl tracking-wide">
                <a
                  href="#"
                  onClick={toggleMenu}
                  className="block hover:text-gray-300 transition duration-200 ease-in-out"
                >
                  Hotel
                </a>
                <a
                  href="#"
                  onClick={toggleMenu}
                  className="block hover:text-gray-300 transition duration-200 ease-in-out"
                >
                  Restaurant
                </a>
                <a
                  href="#"
                  onClick={toggleMenu}
                  className="block hover:text-gray-300 transition duration-200 ease-in-out"
                >
                  Ihr Anlass
                </a>
                <a
                  href="#"
                  onClick={toggleMenu}
                  className="block hover:text-gray-300 transition duration-200 ease-in-out"
                >
                  Über uns
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-8 lg:px-24 py-24">
          <div className="text-white md:mt-28 w-full lg:w-1/2 space-y-4">
            <h1 className="text-5xl md:max-w-lg 2xl:text-8xl lg:text-6xl font-vonique xl:text-7xl font-extralight capitalize">
              Modern. TRADITIONELL. EINZICARTIC.
            </h1>
            <p className="text-lg 2xl:text-xl font-nova lg:text-base font-light">
              Modern, weil das Hotel komplett renoviert wurde und nun in
              fröhlichem und hellen Design erstrahlt. Traditionell, weil wir
              jeden Gast wertschätzen, mit Liebe zum Detail und gastronomischem
              Flair jedem Besucher eine Oase des Wohlfühlens bieten möchten.
              Einzigartig, weil unser Gasthof eine 700
            </p>
            <div className="flex items-center flex-col md:flex-row gap-4">
              <button className="flex items-center gap-2 bg-transparent border font-nova border-white font-extralight hover:bg-green-500 text-white py-2 px-4 rounded">
                ZIMMERBUCHUNG
                <GoArrowUpRight className="mr-2" />
              </button>
              <button className="flex items-center gap-2 font-nova mb-4 md:mb-0 bg-[#0A6B43] hover:bg-green-500 text-white py-2 px-4 rounded">
                TISCHRESERVATION
                <GoArrowUpRight className="mr-2" />
              </button>
            </div>
          </div>

          <div className="lg:block lg:w-1/2 md:mt-28 space-y-4">
            <div className="md:flex flex-col hidden md:flex-row lg:flex-col md:mt-10 lg:mt-0 items-end gap-4">
              <Image
                src="/VL_002_07_P1070523_s.jpg"
                width={200}
                height={250}
                alt="Hotel 1"
                className="rounded shadow-lg border-2 h-40 w-52 border-white p-2"
              />
              <Image
                src="/hero-img-2.jpeg"
                width={200}
                height={250}
                alt="Hotel 2"
                className="rounded shadow-lg border-2 h-40 w-52 border-white p-2"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <Image
            src="/Vector.png"
            width={1920}
            height={200}
            alt="Background Image"
            className="w-full relative -top-[20px]"
          />

          <Image
            src="/hero-bottomm.png"
            width={1920}
            height={200}
            alt="Bottom Image"
            className="w-full absolute z-10 2xl:bottom-0 bottom-0"
          />
        </div>

        <div className="relative z-10">
          <a
            href="#down-section"
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#194748] rounded-full flex items-center justify-center cursor-pointer">
              <FaArrowDown className="text-white" size={20} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
