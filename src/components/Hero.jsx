'use client'
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
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#1A4A4D] opacity-90"></div>

      {/* Header with Logo and Icons */}
      <div>
  <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-8 lg:px-24 md:py-8 z-40">
    <div className="flex items-center">
      <Image
        src="/logogas-removebg-preview.png"
        width={200}
        height={250}
        alt="Hotel 1"
        className="md:w-20 md:h-20 w-12 h-12"
      />
    </div>
    <div className="flex space-x-4 z-50"> {/* Increased z-index to 50 */}
      <a
        href="#"
        onClick={toggleMenu}
        className="text-white hover:text-gray-300"
      >
        {isMenuOpen ? <FaX size={24} /> : <FaBarsStaggered size={24} />}
      </a>
    </div>
  </div>

  {/* Menu Overlay */}
  {isMenuOpen && (
  <div className="fixed inset-0 bg-black opacity-70  z-30 flex flex-col items-center justify-center transition duration-300 ease-in-out">
    <ul className="text-white text-center space-y-8 text-2xl tracking-wide">
      <li className="hover:text-gray-300 transition duration-200 ease-in-out">
        <a href="#" onClick={toggleMenu}>
          Home
        </a>
      </li>
      <li className="hover:text-gray-300 transition duration-200 ease-in-out">
        <a href="#" onClick={toggleMenu}>
          About
        </a>
      </li>
      <li className="hover:text-gray-300 transition duration-200 ease-in-out">
        <a href="#" onClick={toggleMenu}>
          Services
        </a>
      </li>
      <li className="hover:text-gray-300 transition duration-200 ease-in-out">
        <a href="#" onClick={toggleMenu}>
          Contact
        </a>
      </li>
    </ul>
  
  </div>
)}

</div>


     
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-8 lg:px-24 py-24">
       
        <div className="text-white md:mt-28 w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl md:max-w-lg lg:text-7xl font-extralight capitalize">
            Modern. TRADITIONELL. EINZICARTIC.
          </h1>
          <p className="text-lg lg:text-sm font-thin">
            Modern, weil das Hotel komplett renoviert wurde und nun in
            fröhlichem und hellen Design erstrahlt. Traditionell, weil wir jeden
            Gast wertschätzen, mit Liebe zum Detail und gastronomischem Flair
            jedem Besucher eine Oase des Wohlfühlens bieten möchten.
            Einzigartig, weil unser Gasthof eine 700
          </p>
          <div className="flex items-center flex-col md:flex-row gap-4">
            <button className="flex items-center gap-2 bg-transparent border border-white font-extralight text-white py-2 px-4 rounded">
              ZIMMERBUCHUNG
              <GoArrowUpRight className="mr-2" /> 
            </button>
            <button className="flex items-center gap-2 mb-4 md:mb-0 bg-[#0A6B43] hover:bg-green-500 text-white py-2 px-4 rounded">
              TISCHRESERVATION
              <GoArrowUpRight className="mr-2" /> 
            </button>
          </div>
        </div>

        <div className="lg:block lg:w-1/2 md:mt-28 space-y-4">
          <div className="flex flex-col md:flex-row lg:flex-col md:mt-10 lg:mt-0 items-end gap-4">
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
      src="/hero-bottom-removebg-preview.png" 
      layout="responsive"
      width={1920} 
      height={200} 
      alt="Bottom Image"
      className="w-full" 
    />
  </div>

  {/* Circle Button */}
  <div className="relative z-10">
    <a href="#down-section" className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#194748] rounded-full flex items-center justify-center cursor-pointer">
        <FaArrowDown className="text-white" size={20} />
      </div>
    </a>
  </div>

    </div>
  </div>
    
);
}
export default HeroSection;
