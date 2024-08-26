import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const UnsereEvents = () => {
  return (
    <div className="bg-teal-800 text-white pt-10 px-4 md:px-20">
      {/* Header Section */}
      <h1 className="text-3xl md:text-6xl text-white font-light 4 text-center font-vonique lg:mt-12">
        UNSERE EVENTS
      </h1>
      <p className="text-base  font-light font-novatext-xs sm:text-sm md:text-base  lg:text-lg  lg:max-w-lg text-center md:max-w-sm mx-auto font-nova">
        Unsere aktuellen und geplanten Events, wie Kürbiswoche, Fondueplausch,
        Wildwochen finden Sie hier.
      </p>

      <div className="flex flex-col md:flex-row items-center mt-10  md:mt-20 md:pt-10 justify-center xl:justify-center gap-10 xl:gap-12 md:gap-16">
        <div className="flex flex-col items-center">
          <div className="flex items-start justify-start gap-4 mb-4">
            <p className="text-xl md:text-3xl lg:text-3xl font-extralight font-vonique">Hot Stone 2024</p>
            <GoArrowUpRight className="text-2xl md:text-3xl" /> {/* React Icon */}
          </div>
          <div className="flex items-end h-[250px] md:h-[300px] relative">
            <div className="absolute bottom-14 -left-24 md:bottom-16 md:-left-24 pr-2 flex items-center">
              <p className="text-sm md:text-base transform -rotate-90 whitespace-nowrap">
                31.05.24 - 16.06.24
              </p>
            </div>
            <div className="w-48 h-full md:w-60">
              <Image
                src="/event-1.png" // Replace with your image path
                alt="Hot Stone 2024"
                width={300}
                height={300}
                className="h-full w-full object-cover rounded-t-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-start justify-start gap-4 mb-4">
            <p className="text-xl md:text-3xl lg:text-3xl font-extralight font-vonique">Event April-Dez 2024</p>
            <GoArrowUpRight className="text-2xl md:text-3xl lg:text-3xl" /> {/* React Icon */}
          </div>
          <div className="flex items-end h-[250px] md:h-[300px] relative">
            <div className="absolute bottom-24 -left-40 md:bottom-[125px] md:-left-40 pr-2 flex items-center">
              <p className="text-xs md:text-xs transform -rotate-90 max-w-60 md:max-w-64 text-center">
                Verpasst unsere Events nicht, ihr seit alle herzlich Willkommen
                im Stützli-füfzg...
              </p>
            </div>
            <div className="w-48 h-full md:w-60">
              <Image
                src="/event-2.png" // Replace with your image path
                alt="Hot Stone 2024"
                width={300}
                height={300}
                className="h-full w-full object-cover rounded-t-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsereEvents;
