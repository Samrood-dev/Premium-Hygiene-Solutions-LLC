import { companyData } from "@/utils/constants";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

const Hero = () => {
  return (
    <section
      // style={{
      //   background: "linear-gradient(to bottom, #dc2626 60%, #ffffff 50%)",
      // }}
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
        {/* Buttons */}

        <MotionItem className="inline-flex items-center bg-white/5 backdrop-blur-lg px-6 rounded-xl mb-4">
          <span className="text-3xl md:text-3xl font-extrabold text-white tracking-wide">
            @ 30 AED / HOUR
          </span>
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
