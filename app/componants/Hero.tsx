import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

const Hero = () => {
    return (
      <section
      id="home"
      className="pt-16 relative bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    
      <MotionContainer className="relative max-w-7xl h-130 justify-center flex flex-col mx-auto px-4 sm:px-6 lg:px-8 pt-40 py-20">
          <MotionItem>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Cleaning Services
          </h1>
          </MotionItem>
          <MotionItem>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            We provide top-quality cleaning services for homes and offices. Experience the sparkle of a professionally cleaned space.
          </p>
          </MotionItem>
          <MotionItem>

          <a
            href="/booking"
            className="inline-block w-fit bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            >
            Book an Appointment
          </a>
            </MotionItem>
        </MotionContainer>
    </section>
    );
  };  

  export default Hero
