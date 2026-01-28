import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

const CTASection = () => {
  return (
    <section className="bg-primary py-6">
      <MotionContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-white">

        <MotionItem>
          <h2 className="text-center text-xl md:text-2xl font-bold">
            REACH OUT TO US TODAY TO BOOK A SERVICE
          </h2>
        </MotionItem>

        <MotionItem className="pt-5">
          <a
            href="/booking"
            className="bg-white text-primary font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            GET NOW
          </a>
        </MotionItem>

      </MotionContainer>
    </section>
  );
};

export default CTASection;
