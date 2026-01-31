"use client"
import Image from "next/image";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Services = () => {
  const router = useRouter();

  const services = [
    {
      title: "Home Cleaning Service",
      image: "/services/home-cleaning.jpg",
      className: 'objet-top md:object-bottom ',
      description:
        "Complete home cleaning including dusting, mopping, vacuuming, and sanitizing for a fresh living space.",
    },
    {
      title: "Ironing Service",
      image: "/services/ironing.jpg",
      description:
        "Professional ironing service to keep your clothes crisp, neat, and wrinkle-free.",
    },
    {
      title: "Baby Sitting",
      image: "/services/baby-sitting.jpg",
      description:
        "Safe and caring babysitting service to ensure your child is happy, secure, and well cared for.",
    },
    {
      title: "Deep Cleaning Service",
      image: "/services/deep-cleaning.jpg",
      description:
        "Intensive deep cleaning for hard-to-reach areas, removing stubborn dirt and bacteria.",
    },
    {
      title: "Office Cleaning Service",
      image: "/services/office-cleaning.jpg",
      description:
        "Professional office cleaning to maintain a hygienic and productive workspace.",
    },
  ];

  return (
    <section id="services" className="pb-10 pt-10 md:pt-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <MotionContainer className="text-center mb-12">
          <MotionItem>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Services
            </h2>
          </MotionItem>
        </MotionContainer>

        <MotionContainer className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 mx-auto">
          {services.map((service, index) => (
            <MotionItem key={service.title} className="w-full md:max-w-sm">
              <Link href="/booking" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">

                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Professional ${service.title.toLowerCase()} in Dubai`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`${service?.className} object-cover hover:scale-105 transition-transform duration-300`}
                  />
                </div>

                <div className="p-6 text-center h-auto md:h-44">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              </div>
              </Link>

            </MotionItem>
          ))}
        </MotionContainer>

      </div>
    </section>
  );
};

export default Services;
