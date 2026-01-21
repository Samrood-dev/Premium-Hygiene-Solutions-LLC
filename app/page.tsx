import About from "./componants/About";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import Hero from "./componants/Hero";
import HowWeWork from "./componants/HowWeWork";
import Navbar from "./componants/Navbar";
import Reviews from "./componants/Reviews";
import Services from "./componants/Service";
import Whatsapp from "./componants/Whatsapp";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <Contact />
      <Reviews/>
      <Footer />
    </div>
  );
}