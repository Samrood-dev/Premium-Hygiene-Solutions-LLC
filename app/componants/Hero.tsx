import { companyData } from "@/utils/constants";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-primary md:bg-[linear-gradient(to_bottom,#dc2626_60%,#ffffff_50%)] text-white pt-32 pb-10"
      aria-label="Hero section with booking and contact information" >
      <MotionContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionItem>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Professional Cleaning Services
          </h1>
        </MotionItem>

        <MotionItem>
          <p className="text-lg font-semibold md:text-lg mb-3 max-w-2xl mx-auto">
          Serving homes and offices across Dubai, including Liwan Mazaya, International City, Warsan, and Dubai Land. Our professional cleaning team ensures every corner shines.
          </p>
        </MotionItem>

        {/* <MotionItem className=" relative inline-flex items-center bg-white px-6 py-3 rounded-lg shadow-2xl mb-4">
        <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-30"></div>
          <span className="text-red-600 text-sm font-semibold mr-2">FROM</span>
          <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
            30 AED
          </span>
          <span className="ml-2 text-sm font-semibold text-gray-600">
            / HOUR
          </span>
        </MotionItem> */}

        <MotionItem className="inline-flex relative w-30 h-30 mb-4">
          <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-30"></div>
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
          <Link href="/booking"
            className="border text-2xl font-semibold px-6 py-3 rounded-full md:hover:bg-white md:hover:text-primary-dark transition"
            aria-label="Book a professional cleaning service online">
            Book A Cleaning Now
          </Link>
          <a
            href={`tel:${companyData.phone}`}
            className="border text-2xl font-semibold px-6 py-3 rounded-full md:hover:bg-white md:hover:text-primary-dark transition"
            aria-label="Call professional cleaning service"
          >
            {companyData.phone}
          </a>
        </MotionItem>

        <div className="w-full max-w-5xl max-h-[70vh] mx-auto overflow-hidden rounded-3xl shadow-2xl relative">
          <Image
            src="/hero-bg.webp"
            alt="Professional home and office cleaning services in Dubai"
            width={1600}
            height={900}
            priority
            className="object-cover object-top "
          />
        </div>
      </MotionContainer>

    </section>

  );
};

export default Hero;
