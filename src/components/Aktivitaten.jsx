import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Aktivitaten = () => {
  return (
    <div className="bg-white py-10 md:py-20 px-4 md:px-20 text-center">
      <h1 className="text-3xl md:text-4xl font-vonique font-light text-[#194748] mb-4">
        {/* AKTIVITÄTEN */}
      
              <span className="font-vonique">AKTIVIT</span>
              <span className="font-poppins ">Ä</span>
              <span className="font-vonique">TEN</span>
           
      </h1>
      <p className="text-base  font-novatext-xs sm:text-sm md:text-base lg:text-xl lg:max-w-xl text-center  font-nova text-[#194747] font-extralight md:max-w-sm mx-auto">
        Verbinden Sie Ihren Aufenthalt im Gasthof Hecht mit einem tollen
        Ausflug.
      </p>

      <div className="flex flex-col md:flex-row justify-center md:justify-around 2xl:justify-center md:px-12 md:mt-20 mt-8 items-center gap-8">
        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-8">
            <div className="w-48 h-60 mx-auto">
              <Image
                src="/image-1.png"
                alt="Biking"
                width={200}
                height={200}
                className="object-cover rounded-b-full h-full w-full"
              />
            </div>
            <div className="w-52 mx-auto">
              <Image
                src="/image-3.png"
                alt="Salzgrotte"
                width={200}
                height={200}
                className="object-cover w-full rounded-full rounded-tl-none rounded-bl-none"
              />
            </div>
          </div>
          <div className="md:flex  hidden  flex-col gap-8">
            <div className="w-48 h-36 mx-auto">
              <Image
                src="/image-2.png"
                alt="Airport"
                width={144}
                height={144}
                className="object-cover h-full w-full rounded-full rounded-br-none"
              />
            </div>

            <div className="w-48 h-60 mx-auto">
              <Image
                src="/image-4.png"
                alt="Biking"
                width={200}
                height={200}
                className="object-cover rounded-t-full h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="flex flex-col items-   justify-between gap-10 md:gap-20 md:ml-8 text-left w-full md:w-auto">
          {/* First Activity */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-start justify-start w-2/3 md:w-auto">
              <h3 className="text-base md:text-xl lg:text-2xl font-vonique font-semibold text-gray-800 md:w-8/12 w-full ">
                AUSFLUGSZIELE WINKEL UND FLUGHAFEN
              </h3>
              <GoArrowUpRight className="text-gray-300 ml-2" size={60} />
            </div>
            <div className="mt-2 text-[#194747]">
              <p className="text-xs font-nova md:text-xs md:w-3/4">
                Fahrradtour um den Flughafen - ein grosses Vergnügen für die
                ganze Familie. Von unserem Gasthof aus...
              </p>
            </div>
          </div>

          {/* Second Activity */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-start justify-start w-2/3 md:w-auto md:gap-8 gap-8">
              <h3 className="text-base font-vonique md:text-xl lg:text-2xl font-semibold text-gray-800 md:w-5/12 w-1/3 ">
                SALZGROTTE KLOTEN
              </h3>
              <GoArrowUpRight className="text-gray-300 ml-2" size={60} />
            </div>
            <div className="mt-2 text-[#194747]">
              <p className="text-xs font-nova md:text-xs md:w-3/4">
                Entspannung wie am Toten Meer. 25 Tonnen Salz aus dem
                Himalaya, ein farbwechselnder Sternenhimmel...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aktivitaten;
