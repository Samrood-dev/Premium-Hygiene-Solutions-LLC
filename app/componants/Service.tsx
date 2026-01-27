import { Briefcase, Building, Home, Sparkles } from "lucide-react";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";

// Services Section
const Services = () => {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Home Cleaning Service",
      image: "/services/home-cleaning.jpg",
      className: 'object-bottom',
      description:
        "Complete home cleaning including dusting, mopping, vacuuming, and sanitizing for a fresh living space.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Ironing Service",
      image: "/services/ironing.jpg",
      description:
        "Professional ironing service to keep your clothes crisp, neat, and wrinkle-free.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Baby Sitting",
      image: "/services/baby-sitting.jpg",
      description:
        "Safe and caring babysitting service to ensure your child is happy, secure, and well cared for.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Deep Cleaning Service",
      image: "/services/deep-cleaning.jpg",
      description:
        "Intensive deep cleaning for hard-to-reach areas, removing stubborn dirt and bacteria.",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Office Cleaning Service",
      image: "/services/office-cleaning.jpg",
      description:
        "Professional office cleaning to maintain a hygienic and productive workspace.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <MotionContainer className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 mx-auto">
          {services.map((service, index) => (
            <MotionItem key={index} className="w-full max-w-sm">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">

                {/* Image */}
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full ${service?.className} h-full object-cover  hover:scale-105 transition-transform duration-300`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <div className="mb-3 flex justify-center">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

              </div>
            </MotionItem>
          ))}
        </MotionContainer>

      </div>
    </section>
  );
};

export default Services;
