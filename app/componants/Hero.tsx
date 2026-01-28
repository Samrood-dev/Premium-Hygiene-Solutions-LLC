import { companyData } from "@/utils/constants";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

const Hero = () => {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #dc2626 60%, #ffffff 50%)",
      }}
      className="bg-primary text-white py-10">


      <MotionContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionItem>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Professional Cleaning Services
          </h1>
        </MotionItem>

        <MotionItem>
          <p className="text-md font-semibold md:text-lg mb-6 max-w-2xl mx-auto">
            We provide top-quality cleaning services for homes and offices. Experience the sparkle of a professionally cleaned space.
          </p>
        </MotionItem>
        {/* Buttons */}


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

        {/* Image / Video */}
        <div className="w-full max-w-5xl max-h-[70vh] mx-auto overflow-hidden rounded-3xl shadow-2xl relative">
          <img
            src="/hero-bg.jpg"
            alt="Cleaning Service"
            className="w-full h-auto object-cover"
          />
          {/* Optional: Play button overlay */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white/80 text-red-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl hover:scale-110 transition">
              ►
            </button>
          </div>
        </div>
      </MotionContainer>

    </section>

  );
};

export default Hero;
