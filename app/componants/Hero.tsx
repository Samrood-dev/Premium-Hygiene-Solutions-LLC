import { companyData } from "@/utils/constants";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

const Hero = () => {
  return (
    <section
      className="bg-primary md:bg-[linear-gradient(to_bottom,#dc2626_60%,#ffffff_50%)] text-white py-10">


      <MotionContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionItem>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Professional Cleaning Services
          </h1>
        </MotionItem>

        <MotionItem>
          <p className="text-md font-semibold md:text-lg mb-3 max-w-2xl mx-auto">
            We provide top-quality cleaning services for homes and offices. Experience the sparkle of a professionally cleaned space.
          </p>
        </MotionItem>

        {/* <MotionItem className="inline-flex items-center bg-white px-6 py-3 rounded-lg shadow-2xl mb-4">
          <span className="text-red-600 text-sm font-semibold mr-2">FROM</span>
          <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
            30 AED
          </span>
          <span className="ml-2 text-sm font-semibold text-gray-600">
            / HOUR
          </span>
        </MotionItem> */}


        <MotionItem className="inline-flex relative w-30 h-30 mb-4">
          {/* Ping effect */}
          <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-30"></div>

          {/* Main circle */}
          <div className="relative flex flex-col items-center justify-center w-full h-full rounded-full bg-white shadow-xl">
            <span className="text-primary text-3xl font-extrabold">
              30 AED
            </span>
            <span className="text-primary text-sm font-semibold tracking-widest">
              / HOUR
            </span>
          </div>
        </MotionItem>

        <MotionItem className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a
            href="/booking"
            className="border  font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary-dark transition"

          >
            Book A Cleaning Now
          </a>
          <a
            href="tel:3033094226"
            className="border  font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary-dark transition"
          >
            {companyData.phone}
          </a>
        </MotionItem>

        <div className="w-full max-w-5xl max-h-[70vh] mx-auto overflow-hidden rounded-3xl shadow-2xl relative">
          <img
            src="/hero-bg.jpg"
            alt="Cleaning Service"
            className="w-full h-auto object-cover"
          />
        </div>
      </MotionContainer>

    </section>

  );
};

export default Hero;
