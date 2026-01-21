import { Briefcase, Building, Home, Sparkles } from "lucide-react";
import  MotionContainer from "./MotionContainer/MotionContainer";
import   MotionItem from "./MotionItem/MotionItem";

// Services Section
const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Home Cleaning",
      description:
        "Comprehensive cleaning for your home including dusting, vacuuming, mopping, and sanitizing all living spaces.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Office Cleaning",
      description:
        "Professional office cleaning services to maintain a clean and productive work environment for your team.",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "Deep Cleaning",
      description:
        "Intensive cleaning service that tackles hard-to-reach areas and stubborn dirt for a thorough clean.",
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Commercial Cleaning",
      description:
        "Specialized cleaning solutions for retail spaces, restaurants, and commercial properties of all sizes.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <MotionContainer className="text-center mb-12">
          <MotionItem>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
          </MotionItem>
        </MotionContainer>

        {/* Services Grid */}
        <MotionContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <MotionItem key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </MotionItem>
          ))}
        </MotionContainer>

      </div>
    </section>
  );
};

export default Services;
