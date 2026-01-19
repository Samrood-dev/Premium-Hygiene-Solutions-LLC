import { CheckCircle } from "lucide-react";
import { FormData, ServiceType } from "./BookingWIzard";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
};

type Service = {
  id: ServiceType
  title: string
  duration: string
  price: string
}

const services: Service[] = [
  {
    id: "maid",
    title: "Maid Services",
    duration: "1h",
    price: "AED 35.00",
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    duration: "1h",
    price: "AED 35.00",
  },
  {
    id: "office",
    title: "Office Cleaning",
    duration: "1h",
    price: "AED 35.00",
  },
  {
    id: "normal",
    title: "Normal Cleaning",
    duration: "1h",
    price: "AED 35.00",
  },
];

const ServiceStep = ({ formData, setFormData, nextStep }: Props) => {
  const selectService = (id: ServiceType) => {
    setFormData((prev) => ({ ...prev, service: id }));
  };

  return (
    <section className=" bg-white border border-gray-300 p-6">
      <div className="grid md:grid-cols-1 gap-6">
        {services.map((service) => {
          const isActive = formData.service === service.id;

          return (
            <div
              key={service.id}
              onClick={() => selectService(service.id)}
              className={`cursor-pointer p-5 border rounded-xl transition shadow-sm
                  ${isActive
                  ? "border-primary bg-blue-50"
                  : "border-gray-300 hover:shadow-lg"
                }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Duration: {service.duration}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Price: {service.price}
                  </p>
                </div>

                {isActive && (
                  <CheckCircle className="text-primary w-6 h-6" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex">
        <button
          disabled={!formData.service}
          onClick={nextStep}
          className="ml-auto cursor-pointer mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          Continue
        </button>
      </div>


    </section>
  );
};

export default ServiceStep;
