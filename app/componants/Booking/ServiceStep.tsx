import { CheckCircle } from "lucide-react";
import { FormData, ServiceType } from "./BookingWIzard";
import MotionContainer from "../MotionContainer/MotionContainer";
import MotionItem from "../MotionItem/MotionItem";
import Image from "next/image";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
};

type Service = {
  id: ServiceType;
  title: string;
  duration: string;
  image: string;
};

const services: Service[] = [
  { id: "home-cleaning", title: "Home Cleaning Service", duration: "1h", image: "/services/home-cleaning.webp" },
  { id: "ironing", title: "Ironing Service", duration: "1h", image: "/services/ironing.webp" },
  { id: "baby-sitting", title: "Baby Sitting", duration: "1h", image: "/services/baby-sitting.webp" },
  { id: "deep-cleaning", title: "Deep Cleaning Service", duration: "1h", image: "/services/deep-cleaning.webp" },
  { id: "office-cleaning", title: "Office Cleaning Service", duration: "1h", image: "/services/office-cleaning.webp" },
];

const categories = [
  { id: "with-materials", label: "With materials" },
  { id: "without-materials", label: "Without materials" },
];

const ServiceStep = ({ formData, setFormData, nextStep }: Props) => {
  const selectService = (id: ServiceType) => {
    setFormData((prev) => ({ ...prev, service: id }));
  };

  return (
    <MotionContainer className="bg-white p-6 space-y-6 border border-gray-300">
      {/* Category Selection */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Select Category</h2>
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => {
            const isActive = formData.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, category: cat.id as any }))
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition
              ${isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {isActive && <CheckCircle className="w-4 h-4" />}
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Service Options */}
      <div className="max-h-[43vh] overflow-scroll space-y-6">
        {services.map((service) => {
          const isActive = formData.service === service.id;
          const price = formData.category === 'without-materials' ? 30 : 35

          return (
            <MotionItem key={service.id}>
              <div
                onClick={() => selectService(service.id)}
                className={`cursor-pointer flex flex-col md:flex-row rounded-xl overflow-hidden transition shadow-sm
                  ${isActive
                    ? "bg-blue-50 border border-primary"
                    : "bg-white border border-gray-200 hover:shadow-lg"
                  }`}
              >
                <div className="relative w-full  md:w-32 h-40 md:h-32 shrink-0 overflow-hidden">
                  <Image
                     src={service.image}
                     alt={service.title}
                     fill
                     priority
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text content */}
                <div className="flex-1 p-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-500">Duration: {service.duration}</p>
                    <p className="text-sm font-medium text-gray-700">Price: AED {price}.00</p>
                  </div>  
                  {isActive && <CheckCircle className="text-primary w-6 h-6 mt-1" />}
                </div>
              </div>
            </MotionItem>
          );
        })}
      </div>

      {/* Continue Button */}
      <MotionItem>
        <div className="flex">
          <button
            disabled={!formData.service}
            onClick={nextStep}
            className="ml-auto mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 hover:bg-red-700 transition"
          >
            Continue
          </button>
        </div>
      </MotionItem>
    </MotionContainer>
  );
};

export default ServiceStep;
