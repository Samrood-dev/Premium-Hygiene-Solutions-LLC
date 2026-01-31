import { Phone, Mail, MapPin } from "lucide-react";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";
import { companyData } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionContainer className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <MotionItem>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Premium Hygiene Solutions LLC logo"
                  width={60}  
                  height={60} 
                />
                <span className="text-2xl font-bold">
                  Premium Hygiene <br />Solutions LLC
                </span>
              </div>
              <p className="text-gray-400 text-xl">
                Professional cleaning services you can trust. Making your space
                sparkle with care and perfection.
              </p>
          </MotionItem>

          {/* Quick Links */}
          <MotionItem as="nav" aria-label="Footer navigation">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <MotionContainer as="ul" className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <MotionItem as="li" key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 text-lg hover:text-white transition"
                      >
                        {link.name}
                      </Link>
                  </MotionItem>
                ))}
              </MotionContainer>
          </MotionItem>

          {/* Contact Info */}
          <MotionItem>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2 text-lg">
                  <Phone aria-hidden="true" className="h-5 w-5 text-primary" />
                  <a href={`tel:${companyData.phone}`} className="hover:text-white">
                    {companyData.phone}
                  </a>
                </li>

                <li className="flex items-start gap-2 text-lg">
                  <Mail  aria-hidden="true" className="h-5 w-5 text-primary" />
                  <a href={`mailto:${companyData.email}`} className="hover:text-white">
                    {companyData.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <MapPin  aria-hidden="true" className="h-5 w-5 text-primary" />
                  <address className="not-italic">
                    {companyData.address}
                  </address>
                </li>
              </ul>
            </div>
          </MotionItem>

        </MotionContainer>

        {/* Bottom */}
        <MotionContainer className="border-t border-gray-800 mt-8 pt-8 text-center">
          <MotionItem as="p" className="text-gray-400">
              &copy; {new Date().getFullYear()} Premium Hygiene Solutions LLC. All
              rights reserved.
          </MotionItem>
        </MotionContainer>

      </div>
    </footer>
  );
};

export default Footer;
