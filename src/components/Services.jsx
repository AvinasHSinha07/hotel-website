import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Services() {
  return (
    <div className="bg-[#F6FBF6] py-12 lg:py-32 xl:py-40 xl:-mt-72 lg:-mt-60 flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-4 lg:gap-[60px] xl:gap-32 2xl:gap-32">
        <div className=" flex justify-center h-80 w-60 relative">
          <Image
            src="/resturant.jpeg"
            width={400}
            height={400}
            alt="Service Image 1"
            className="object-cover xl:h-[420px] xl:w-[400px]  lg:h-[350px]"
          />
          <div className="absolute xl:left-[144px] lg:left-[116px] 2xl:left-[144px] xl:-bottom-16  md:bottom-0 bottom-0 z-10 flex flex-col justify-center md:bg-[#F7FAF6] bg-[#F7FAF6] bg-opacity-50 md:bg-opacity-100 p-4 xl:p-6 xl:pr-14 xl:pl-4   text-teal-800 max-w-xs">
            <h2 className="md:text-2xl  text-lg font-bold mb-1 font-vonique">
              RESTAURANT
            </h2>
            <p className="text-[10px] xl:text-[14px]  mb-2 font-nova">
              Aktuelle Speisekarte und edles aus unserem Weinkeller
            </p>
            <ul className="text-[12px] xl:text-[18px] mb-2 font-vonique space-y-2">
              <li>Speisekarte</li>
              <li>Weinkarte</li>
              <li>Räumlichkeiten</li>
            </ul>
            {/* <div className="flex flex-col gap-2 ">
              <button className="inline-flex items-center gap-1 bg-[#0A6B43] hover:bg-green-500 font-nova text-white font-extralight py-1 px-2 rounded text-[10px]">
                TISCHRESERVATION
                <GoArrowUpRight className="text-sm" />
              </button>
              <button className="flex items-center gap-1 font-nova bg-[#0A6B43] hover:bg-green-500 text-white font-extralight py-1 px-3 rounded text-[10px]">
                ZIMMERBUCHEN
                <GoArrowUpRight className="text-sm" />
              </button>
            </div> */}
            <div className="mb-2">
              <button className="flex items-center gap-1 font-nova bg-[#0A6B43] hover:bg-green-500 text-white font-extralight py-1 px-3 rounded text-[10px]">
                TISCHRESERVATION
                <GoArrowUpRight className="text-sm" />
              </button>
            </div>
            <div>
              <button className="flex items-center gap-1 font-nova bg-[#AF382D] hover:bg-green-500 text-white font-extralight py-1 px-3 rounded text-[10px]">
                TAGESMENÜ
                <GoArrowUpRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex justify-center h-60 w-60 relative">
          <Image
            src="/hotel.jpeg"
            width={640}
            height={400}
            alt="Service Image 2"
            className="object-cover xl:h-[320px] xl:w-[400px]"
          />
          <div className="absolute xl:left-[176px] xl:h-48 xl:w-48 2xl:left-[177px] lg:left-[153px] md:bottom-[12px] lg:bottom-4 xl:-bottom-[23px] bottom-0 z-10 md:bg-[#F7FAF6] bg-opacity-50 md:bg-opacity-100 flex flex-col justify-center bg-white p-4 xl:p-6 xl:pl-4 text-teal-800">
            <h2 className="md:text-2xl text-lg font-bold mb-1 font-vonique">
              HOTEL
            </h2>
            <p className="text-[10px] xl:text-[14px] mb-2 font-nova w-full">
              Entdecken Sie wunderschöne Zimmer mit traditionellem Charme
            </p>

            <div>
              <button className="flex items-center gap-1 font-nova bg-[#0A6B43] hover:bg-green-500 text-white font-extralight py-1 px-3 rounded text-[10px]">
                ZIMMERBUCHEN
                <GoArrowUpRight className="text-sm" />
              </button>
            </div>
          </div>

          <div className="absolute -bottom-20 xl:-bottom-44 left-0 hidden  z-10 md:flex flex-col justify-center xl:w-[400px] 2xl:w-[400px] lg:w-[300px] py-4 px-4 bg-[#AF382D] text-white xl:max-w-xs">
            <p className="text-[10px] mb-2 font-nova">
              Feiern Sie Ihren unvergesslichen Anlass oder planen Sie Ihr
              nächstes Seminar im Gasthof Hecht.
            </p>
          </div>
        </div>

        <div className=" flex justify-center h-72 w-60 relative">
          <Image
            src="/ihranlas.jpeg"
            width={640}
            height={400}
            alt="Service Image 3"
            className="object-cover xl:h-[350px] xl:w-[400px]"
          />
          <div className="absolute xl:left-32 2xl:left-44 lg:left-40 md:bottom-4 lg:bottom-4 xl:-bottom-[35px]  bottom-0 z-10 md:bg-[#F7FAF6] bg-opacity-50 md:bg-opacity-100 flex flex-col justify-center bg-white p-4 xl:p-6 xl:pr-10 xl:pl-4 text-teal-800 max-w-xs xl:w-[250px] 2xl:w-[250px]">
            <h2 className="md:text-2xl text-lg font-bold mb-1">IHRANLASS</h2>
            <p className="text-[10px] xl:text-[14px] mb-2 font-nova">
              Feiern Sie Ihren unvergesslichen Anlass oder planen Sie Ihr
              nächstes Seminar im Gasthof Hecht
            </p>
            <ul className="text-[12px] xl:text-[18px] mb-2 font-vonique space-y-2">
              <li>BENKATTE</li>
              <li>SEMINARE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
