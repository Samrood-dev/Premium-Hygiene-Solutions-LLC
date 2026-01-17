import { Briefcase, Building, Home, Sparkles } from "lucide-react";

// Services Section
const Services = () => {
    const services = [
      {
        icon: <Home className="h-12 w-12 text-blue-600" />,
        title: "Home Cleaning",
        description: "Comprehensive cleaning for your home including dusting, vacuuming, mopping, and sanitizing all living spaces."
      },
      {
        icon: <Briefcase className="h-12 w-12 text-blue-600" />,
        title: "Office Cleaning",
        description: "Professional office cleaning services to maintain a clean and productive work environment for your team."
      },
      {
        icon: <Sparkles className="h-12 w-12 text-blue-600" />,
        title: "Deep Cleaning",
        description: "Intensive cleaning service that tackles hard-to-reach areas and stubborn dirt for a thorough clean."
      },
      {
        icon: <Building className="h-12 w-12 text-blue-600" />,
        title: "Commercial Cleaning",
        description: "Specialized cleaning solutions for retail spaces, restaurants, and commercial properties of all sizes."
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Services