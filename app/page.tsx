import About from "./componants/About";
import Contact from "./componants/Contact";
import CTASection from "./componants/CTASection";
import Footer from "./componants/Footer";
import Hero from "./componants/Hero";
import HowWeWork from "./componants/HowWeWork";
import Navbar from "./componants/Navbar";
import Reviews from "./componants/Reviews";
import Services from "./componants/Service";
import Social from "./componants/Social";
import TriangleArrow from "./componants/TriangleArrow";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <div className="mt-16 py-4 px-20 text-center bg-primary">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Your Home & Office, <span className="animate-pulse">Perfectly Spotless.</span></h1>
      </div> */}
      <div className="pt-16">
        <Hero />
        <Services />
        <About />
        <HowWeWork />
        <CTASection />
        <Social />
        <Contact />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}