"use client"
import { useEffect, useState } from "react";
import BasicDetails from "./BasicDetails";
import DateTimeStep from "./DateTimeStep";
import ServiceStep from "./ServiceStep";
import Summary from "./Summary";
import MotionContainer from "../MotionContainer/MotionContainer";
import MotionItem from "../MotionItem/MotionItem";
import {motion} from 'framer-motion'

const steps = [
  { id: 1, title: "Service" },
  { id: 2, title: "Date & Time" },
  { id: 3, title: "Basic Details" },
  { id: 4, title: "Summary" },
];

export type ServiceType =
  | "home-cleaning"
  | "ironing"
  | "baby-sitting"
  | "deep-cleaning"
  | "office-cleaning";
export type Category = "all" | "no-materials" | "with-materials"

export type FormData = {
  name: string;
  email: string;
  category: Category,
  phone: string;
  service?: ServiceType;
  date: Date;
  time: string;
  address: string;
  message: string;
  duration: number
};

export type BasicDetailsType = Omit<FormData, "service" | "date" | "time">;

const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>({
    service: undefined,
    category: 'all',
    date: new Date(),
    time: "",
    duration: 1,
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const markCompleted = (stepNumber: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNumber) ? prev : [...prev, stepNumber]
    );
  };

  const goToStep = (stepNumber: number) => {
    if (stepNumber === 1 || completedSteps.includes(stepNumber - 1)) {
      setStep(stepNumber);
    }
  };

  useEffect(() => {
    if (formData.service) {
      markCompleted(1);
      setStep(2);
    }
  }, [formData.service]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="py-20 max-w-full px-5">
     <motion.h2
      className="text-3xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Book your service
    </motion.h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 min-h-screen">

        <div className="bg-white rounded-2xl border max-h-fit border-gray-300 shadow-lg min-w-xs">
          <MotionContainer className="space-y-4 p-4">
            {steps.map((s) => {
              const isActive = step === s.id;
              const isUnlocked = s.id === 1 || completedSteps.includes(s.id - 1);
              return (
                <MotionItem key={s.id}>
                  <div
                    onClick={() => isUnlocked && goToStep(s.id)}
                    className={`
              p-4 rounded-xl border transition-all
              ${isActive
                        ? "bg-primary text-white border-primary shadow-md"
                        : ""
                      }
              ${isUnlocked
                        ? "border-gray-200 cursor-pointer hover:shadow-md"
                        : "bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed"
                      }
            `}
                  >
                    <p className="text-xs uppercase tracking-wide opacity-70">
                      Step {s.id}
                    </p>
                    <h4 className="text-base font-semibold">{s.title}</h4>
                  </div>
                </MotionItem>
              );
            })}
          </MotionContainer>
        </div>

        <div className="flex-1 max-w-3xl">

          {step === 1 &&
            <ServiceStep
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />}
          {step === 2 &&
            <DateTimeStep
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              markCompleted={markCompleted}
            />}
          {step === 3 &&
            <BasicDetails
              formData={formData}
              setFormData={setFormData as any}
              nextStep={nextStep}
              markCompleted={markCompleted}
              prevStep={prevStep}
            />}
          {step === 4 &&
            <Summary
              formData={formData}
              prevStep={prevStep}

            />}
        </div>
      </div>
    </div>
  );

};


export default BookingWizard;
