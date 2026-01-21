import { CheckCircle } from "lucide-react";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <MotionContainer className="text-center mb-12">
          <MotionItem>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Premium Hygiene Solutions LLC
            </h2>
          </MotionItem>
        </MotionContainer>

        <MotionContainer className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <MotionItem>
            <div>
              <MotionItem>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h3>
              </MotionItem>
              <MotionItem>
                <p className="text-gray-600 mb-6">
                  To provide exceptional cleaning services that exceed our clients'
                  expectations while maintaining the highest standards of professionalism
                  and environmental responsibility.
                </p>
              </MotionItem>

              <MotionItem>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Vision
                </h3>
              </MotionItem>
              <MotionItem>
                <p className="text-gray-600 mb-6">
                  To be the most trusted and preferred cleaning service provider, known
                  for our reliability, quality, and customer satisfaction.
                </p>
              </MotionItem>

              <MotionItem>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Experience
                </h3>
              </MotionItem>
              <MotionItem>
                <p className="text-gray-600">
                  With over 10 years of experience in the cleaning industry, we have
                  served thousands of satisfied customers across the region.
                </p>
              </MotionItem>
            </div>
          </MotionItem>

          {/* Right Content */}
          <MotionItem>
            <div className="bg-blue-50 p-8 rounded-lg">
              <MotionItem>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Why Choose Us?
                </h3>
              </MotionItem>

              <MotionContainer className="space-y-4">
                {[
                  "Trained and background-checked professionals",
                  "Eco-friendly cleaning products",
                  "100% satisfaction guarantee",
                  "Flexible scheduling and competitive pricing",
                  "Fully insured and bonded",
                ].map((item, index) => (
                  <MotionItem key={index}>
                    <li className="flex items-start list-none">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  </MotionItem>
                ))}
              </MotionContainer>
            </div>
          </MotionItem>

        </MotionContainer>
      </div>
    </section>
  );
};

export default About;
