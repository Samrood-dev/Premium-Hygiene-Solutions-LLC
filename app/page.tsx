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
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <CTASection/>
      <Social/>
      <Contact />
      <Reviews/>
      <Footer />
    </div>
  );
}