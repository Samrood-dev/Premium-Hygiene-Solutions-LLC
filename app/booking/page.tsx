import { siteMeta } from "@/seo.config";
import BookingWizard from "../componants/Booking/BookingWIzard";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";

export const metadata = {
  title: "Book a Cleaning Service Online",
  description:
    "Book professional home or office cleaning services in minutes. Choose your schedule, service type, and confirm instantly.",
  openGraph: {
    title: "Book Cleaning Service | Premium Maids",
    description:
      "Quick and easy online booking for trusted cleaning services.",
    url: `${siteMeta.url}/booking`,
  },
  alternates: {
    canonical: `${siteMeta.url}/booking`,
  },
};

export default function App() {
  return (
    <main>
        <Navbar />
        <BookingWizard />
        <Footer/>
    </main>
  );
}