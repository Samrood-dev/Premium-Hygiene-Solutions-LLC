import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";
import { companyData } from "@/utils/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <MotionContainer className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <MotionItem>
            <div>
              <div className="flex items-center mb-4">
                <Image className="-ml-18" src={'/logo.png'} width={200} height={200} alt=""/>
                <span className="-ml-10 text-xl font-bold">
                  Premium Hygiene <br/>Solutions
                </span>
              </div>
              <p className="text-gray-400 -mt-6">
                Professional cleaning services you can trust. Making your space
                sparkle with care and perfection.
              </p>
            </div>
          </MotionItem>

          {/* Quick Links */}
          <MotionItem>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Contact", href: "#contact" },
                ].map((link, index) => (
                  <MotionItem key={index}>
                    <li>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  </MotionItem>
                ))}
              </ul>
            </div>
          </MotionItem>

          {/* Contact Info */}
          <MotionItem>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  {companyData.phone}
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  {companyData.email}
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {companyData.address}
                </li>
              </ul>
            </div>
          </MotionItem>

        </MotionContainer>

        {/* Bottom */}
        <MotionContainer className="border-t border-gray-800 mt-8 pt-8 text-center">
          <MotionItem>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Premium Hygiene Solutions LLC. All
              rights reserved.
            </p>
          </MotionItem>
        </MotionContainer>

      </div>
    </footer>
  );
};

export default Footer;
