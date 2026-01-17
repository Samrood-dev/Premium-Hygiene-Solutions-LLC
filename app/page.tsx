"use client"
import About from "./componants/About";
import BookingForm from "./componants/Booking/BasicDetails";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import Hero from "./componants/Hero";
import Navbar from "./componants/Navbar";
import Reviews from "./componants/Reviews";
import Services from "./componants/service";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Reviews/>
      <Footer />
    </div>
  );
}