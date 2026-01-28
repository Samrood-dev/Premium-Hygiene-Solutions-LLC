import { CheckCircle } from "lucide-react";
import { FormData, ServiceType } from "./BookingWIzard";
import MotionContainer from "../MotionContainer/MotionContainer";
import MotionItem from "../MotionItem/MotionItem";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
};

type Service = {
  id: ServiceType;
  title: string;
  duration: string;
  price: string;
  image: string;
};

const services: Service[] = [
  { id: "home-cleaning", title: "Home Cleaning Service", duration: "1h", price: "AED 30.00", image: "/services/home-cleaning.jpg" },
  { id: "ironing", title: "Ironing Service", duration: "1h", price: "AED 30.00", image: "/services/ironing.jpg" },
  { id: "baby-sitting", title: "Baby Sitting", duration: "1h", price: "AED 30.00", image: "/services/baby-sitting.jpg" },
  { id: "deep-cleaning", title: "Deep Cleaning Service", duration: "1h", price: "AED 30.00", image: "/services/deep-cleaning.jpg" },
  { id: "office-cleaning", title: "Office Cleaning Service", duration: "1h", price: "AED 30.00", image: "/services/office-cleaning.jpg" },
];

const ServiceStep = ({ formData, setFormData, nextStep }: Props) => {
  const selectService = (id: ServiceType) => {
    setFormData((prev) => ({ ...prev, service: id }));
  };

  return (
    <MotionContainer className="bg-white p-6 space-y-6 border border-gray-300">
      {/* Service Options */}
      {services.map((service) => {
        const isActive = formData.service === service.id;
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
              {/* Image */}
              <div className="w-full md:w-32 h-40 md:h-32 shrink-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 p-5 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-500">Duration: {service.duration}</p>
                  <p className="text-sm font-medium text-gray-700">Price: {service.price}</p>
                </div>
                {isActive && <CheckCircle className="text-primary w-6 h-6 mt-1" />}
              </div>
            </div>
          </MotionItem>
        );
      })}

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
