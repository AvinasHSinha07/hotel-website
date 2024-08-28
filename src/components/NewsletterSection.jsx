import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const NewsletterSection = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/footer-img.jpeg" // The path to your uploaded image
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] from-10% to-black/60 bg-opacity-80 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-16 lg:py-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-vonique font-light text-center mb-4">
          ABONNIEREN SIE UNSEREN NEWSLETTER
        </h1>
        <p className="text-center text-xs sm:text-sm md:text-base font-nova lg:text-xl mb-6 font-extralight w-full md:max-w-lg">
          Melden Sie sich für unseren Newsletter an und erhalten Sie Neuigkeiten
          und aktuelle Events in Ihre Inbox.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-md">
          <input
            type="email"
            placeholder="Ihre Emailadresse"
            className="w-full p-2 mb-4 sm:mb-0 sm:mr-2 sm:rounded-l-lg focus:outline-none placeholder:text-xs"
          />
          <button className="w-full font-nova sm:w-auto p-2 bg-[#AF382D] text-white rounded sm:rounded-r-lg">
            Abonnieren
          </button>
        </div>

        <div className="relative z-10 w-full max-w-6xl mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-between py-4 px-4 md:px-8 lg:px-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0">
            <Image
              src="/footerlogo.png" // Replace with your logo path
              alt="Logo"
              width={176} // Adjust the width as needed
              height={120} // Adjust the height as needed
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-white">
            <FaFacebook size={24} className="hover:text-blue-500" />
            <FaTwitter size={24} className="hover:text-blue-400" />
            <FaInstagram size={24} className="hover:text-pink-500" />
          </div>
        </div>

        <hr className="w-full max-w-6xl bg-white border-white border-t-2 mt-4 mb-4" />

        <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row justify-between gap-8 md:gap-10 px-4 md:px-8 lg:px-24 mt-8 text-white">
          {/* Column 1: Gasthof Hecht Info */}
          <div className="md:w-1/4 flex flex-col items-start text-left">
            <p className="text-xs sm:text-sm lg:text-sm font-nova leading-relaxed">
              Gasthof Hecht mit einer Tradition des Genusses und der
              Entspannung. Bekannt für seine raffinierte Küche, erlesene Weine
              und gemütliche Zimmer. Wir freuen uns auf Sie!
            </p>
            <address className="mt-12">
              <h3 className="capitalize font-vonique text-lg sm:text-xl md:text-2xl">
                Gasthof Hecht
              </h3>
              <p className="text-xs sm:text-sm font-nova">
                Zürichstrasse 12 CH-8185 Winkel
              </p>
            </address>
          </div>

          {/* Column 2: Links */}
          <div className="md:w-1/4 flex flex-col items-start text-left">
            <h2 className="text-lg font-vonique sm:text-xl md:text-2xl font-light mb-4 sm:mb-6">
              LINKS
            </h2>
            <a href="#" className="text-xs sm:text-sm hover:underline mb-4">
              Datenschutz
            </a>
            <a href="#" className="text-xs sm:text-sm hover:underline mb-4">
              Impressum
            </a>
            <a href="#" className="text-xs sm:text-sm hover:underline mb-4">
              Tischreservation
            </a>
          </div>

          {/* Column 3: Öffnungszeiten */}
          <div className="md:w-1/4 flex flex-col items-start text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-light -mt-1 mb-4 sm:mb-6">
              <span className="font-poppins text-lg sm:text-xl md:text-2xl font-light">Ö</span>
              <span className="font-vonique">FFNUNGSZEITEN</span>
            </h2>

            <p className="text-xs sm:text-sm">
              <span className="block mb-4">Resturant</span>
              <span className="block mb-4">Mo-Sa: 06:00 - 24:00</span>
              <span className="block mb-4">So: 08:00 - 23:00</span>
              <span className="block mb-4">
                Warme Küche durchgehend 11:00 - 22:00 Uhr
              </span>
              <strong className="block mt-4">Hotel</strong>
              <span className="block">Mo-So: 06:00 - 24:00</span>
            </p>
          </div>

          {/* Column 4: Kontakt */}
          <div className="md:w-1/4 flex flex-col items-start text-left">
            <h2 className="text-lg font-vonique sm:text-xl md:text-2xl font-light mb-4 sm:mb-6">
              KONTAKT
            </h2>
            <p className="text-xs sm:text-sm">
              <span className="block mb-4">
                <strong>Email:</strong> info@hecht-winkel.ch
              </span>
              <span className="block">
                <strong>Telefon:</strong> +41 44 860 65 70
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-8 py-4 flex justify-center items-center bg-[#AF382D] text-white">
        <p className="text-xs sm:text-sm">&copy; 2024 Gasthof Hecht.</p>
      </div>
    </div>
  );
};

export default NewsletterSection;
