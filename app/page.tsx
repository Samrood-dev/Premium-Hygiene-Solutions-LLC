import { companyData } from "@/utils/constants";
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
import { siteMeta } from "@/seo.config";

export const metadata = {
  title: "Professional Cleaning Services in UAE",
  description:
    "Premium home & office cleaning services in UAE. Trusted maids, eco-friendly products, and easy online booking.",
  openGraph: {
    title: "Professional Cleaning Services in UAE",
    description:
      "Book trusted home & office cleaning services in UAE with Premium Maids.",
    images: [
      {
        url: siteMeta.image,
        width: 1200,
        height: 630,
        alt: "Premium Maids",
      },
    ],
  },
  alternates: {
    canonical: siteMeta.url,
  },
};

export default function App() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        {/* <div className="mt-16 py-4 px-20 text-center bg-primary">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Your Home & Office, <span className="animate-pulse">Perfectly Spotless.</span></h2>
        </div> */}
        <Hero />
        <Services />
        <About />
        <HowWeWork />
        <CTASection />
        <Social />
        <Contact />
        <Reviews />
        <Footer />
      </main>
    </>
  );
}