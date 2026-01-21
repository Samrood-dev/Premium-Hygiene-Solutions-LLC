import { Sparkles } from "lucide-react";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Content */}
        <MotionContainer className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <MotionItem>
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">PremiumHygiene</span>
              </div>
              <p className="text-gray-400">
                Professional cleaning services you can trust. Making your space
                sparkle since 2015.
              </p>
            </div>
          </MotionItem>

          {/* Quick Links */}
          <MotionItem>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <MotionContainer className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Contact", href: "#contact" },
                ].map((link, index) => (
                  <MotionItem key={index}>
                    <li className="list-none">
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  </MotionItem>
                ))}
              </MotionContainer>
            </div>
          </MotionItem>

          {/* Newsletter */}
          <MotionItem>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers and cleaning tips.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary-dark transition">
                  Subscribe
                </button>
              </div>
            </div>
          </MotionItem>

        </MotionContainer>

        <MotionContainer className="border-t border-gray-800 mt-8 pt-8 text-center">
          <MotionItem>
            <p className="text-gray-400">
              &copy; 2025 PremiumHygiene. All rights reserved.
            </p>
          </MotionItem>
        </MotionContainer>

      </div>
    </footer>
  );
};

export default Footer;
