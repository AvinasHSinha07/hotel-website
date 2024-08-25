import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Services() {
  return (
    <div className="">
    <div className="z-10 text-white bg-[#F7FAF6] py-20 md:-mt-48 flex md:items-start items-center justify-center md:justify-start gap-8 flex-col md:flex-row xl:gap-[128px] 2xl:gap-[128px] lg:gap-[7%]  md:pl-[0%]  lg:pl-[8%] xl:pl-[10%] 2xl:pl-[30%] lg: md:pr-20">
      <div className=" flex justify-center h-80 w-60 relative">
        <Image
          src="/resturant.jpeg" // Replace with your image path
          layout="responsive"
          width={400} // Set the width to match the height ratio
          height={400} // Adjust the height as needed
          alt="Service Image 1"
          className="object-cover"
        />
        <div className="absolute xl:left-[200px] lg:left-[120px] 2xl:left-[200px]   md:bottom-8 bottom-0 z-10 flex flex-col justify-center md:bg-[#F7FAF6] bg-[#F7FAF6] bg-opacity-50 md:bg-opacity-100 p-4 pr-12 text-teal-800 max-w-xs">
          <h2 className="text-base font-bold mb-1">RESTAURANT</h2>
          <p className="text-[8px] mb-2">
            Aktuelle Speisekarte und edles aus unserem Weinkeller
          </p>
          <ul className="text-[8px] mb-2">
            <li>Speisekarte</li>
            <li>Weinkarte</li>
            <li>Räumlichkeiten</li>
          </ul>
          <div className="flex flex-col gap-2">
            <button className="inline-flex items-center gap-1 bg-[#0A6B43] hover:bg-green-500 text-white font-extralight py-1 px-2 rounded text-[8px]">
              TISCHRESERVATION
              <GoArrowUpRight className="text-sm" /> {/* React Icon */}
            </button>
            <button className="inline-flex items-center gap-1 w-3/2 bg-[#AF382D]  font-extralight text-white py-1 px-2 rounded text-[8px]">
              TAGESMENÜ
              <GoArrowUpRight className="text-sm" /> {/* React Icon */}
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center h-60 w-60 relative">
        <Image
          src="/hotel.jpeg" // Replace with your image path
          layout="responsive"
          width={640} // Set the width to match the height ratio
          height={400} // Adjust the height as needed
          alt="Service Image 2"
          className="object-cover"
        />
        <div className="absolute xl:left-[204px] 2xl:left-[204px] lg:left-[130px] md:bottom-[12px] bottom-0 z-10 md:bg-[#F7FAF6] bg-opacity-50 md:bg-opacity-100 flex flex-col justify-center bg-white p-4 pr-12 text-teal-800 max-w-xs">
          <h2 className="text-base font-bold mb-1">HOTEL</h2>
          <p className="text-[8px] mb-2">
            Entdecken Sie wunderschöne Zimmer mit traditionellem Charme
          </p>

          <div className="">
            <button className="flex items-center gap-1 bg-[#0A6B43] hover:bg-green-500 text-white font-extralight py-1 px-3 rounded text-[8px]">
              ZIMMERBUCHEN
              <GoArrowUpRight className="text-sm" /> {/* React Icon */}
            </button>
          </div>
          <div></div>
        </div>
        <div className="absolute -bottom-20 left-0 hidden  z-10 md:flex flex-col justify-center xl:w-[400px] 2xl:w-[400px] lg:w-[300px] py-4 px-4 bg-[#AF382D] text-white xl:max-w-xs">
          <p className="text-[8px] mb-2 ">
            Feiern Sie Ihren unvergesslichen Anlass oder planen Sie Ihr nächstes
            Seminar im Gasthof Hecht.
          </p>
          <div></div>
        </div>
      </div>
      <div className=" flex justify-center h-72 w-60 relative">
        <Image
          src="/ihranlas.jpeg" // Replace with your image path
          layout="responsive"
          width={640} // Set the width to match the height ratio
          height={400} // Adjust the height as needed
          alt="Service Image 3"
          className="object-cover"
        />
        <div className="absolute xl:left-52 2xl:left-52 lg:left-40 md:bottom-4 bottom-0 z-10 md:bg-[#F7FAF6] bg-opacity-50 md:bg-opacity-100  flex flex-col justify-center bg-white  p-4 pr-12 text-teal-800 max-w-xs">
          <h2 className="text-base font-bold mb-1">IHRANLASS</h2>
          <p className="text-[8px] mb-2 ">
            Feiern Sie Ihren unvergesslichen Anlass oder planen Sie Ihr nächstes
            Seminar im Gasthof Hecht
          </p>
          <ul className="text-[8px] mb-2 space-y-2">
            <li>BENKATTE</li>
            <li>SEMINARE</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
