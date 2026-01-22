import { ArrowLeft } from "lucide-react";
import { FormData, ServiceType } from "./BookingWIzard";
import { Toaster, toast } from 'sonner';
import { useRouter } from "next/navigation";
import { PRICE_PER_HOUR } from "@/utils/constants";
import MotionContainer from "../MotionContainer/MotionContainer";
import MotionItem from "../MotionItem/MotionItem";
import { useState } from "react";

type Props = {
  formData: FormData;
  prevStep: () => void;
};

const serviceNames: Record<ServiceType, string> = {
  normal: 'Normal Cleaning',
  deep: 'Deep Cleaning',
  maid: 'Maid Service',
  office: 'Office Cleaning',
};

const Summary = ({ formData, prevStep }: Props) => {
  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState(false)
  const sendBooking = async () => {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        date: formData.date?.toISOString(),
      }),
    });

    const result = await res.json();
    if (!res.ok || !result.success) {
      throw new Error("Failed to send booking");
    }

    return result;
  };

  const handleSubmit = async () => {
    setIsSubmit(true);
    toast.promise(sendBooking(), {
      loading: "Sending booking...",
      success: () => {
        router.replace("/");
        return "Booking sent successfully!";
      },
      error: "Failed to send booking",
      finally: () => { setIsSubmit(false) }
    });
  };

  const totalAmount = formData.duration * PRICE_PER_HOUR;

  return (
    <MotionContainer className="flex justify-center items-start">
      <div className="w-full border border-gray-300 p-4 max-w-3xl space-y-8">

        {/* Header */}
        <MotionItem>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Confirm Your Booking
          </h2>
          <p className="text-center text-gray-500">
            Review all details before submitting your service
          </p>
        </MotionItem>

        {/* Service Details */}
        <MotionItem>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Service Details</h3>
            <p>
              <span className="font-semibold text-primary-dark">
                {formData.service && serviceNames[formData.service]}
              </span>{" "}
              on{" "}
              <span className="font-medium">
                {formData.date?.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>{" "}
              at{" "}
              <span className="font-semibold text-primary-dark">{formData.time}</span>
            </p>
            <p>
              Duration: <span className="font-semibold">{formData.duration} hour{formData.duration > 1 ? "s" : ""}</span>
            </p>
            <p>
              Location: <span className="font-medium text-gray-900">{formData.address}</span>
            </p>
            <p>
              Total: <span className="font-bold text-primary-dark">{totalAmount} AED</span>
            </p>
          </div>
        </MotionItem>

        {/* Customer Info */}
        <MotionItem>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Customer Information</h3>
            <p><span className="font-medium">Name:</span> {formData.name}</p>
            <p><span className="font-medium">Phone:</span> {formData.phone}</p>
            <p><span className="font-medium">Email:</span> {formData.email}</p>
          </div>
        </MotionItem>

        {/* Additional Message */}
        {formData.message && (
          <MotionItem>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-gray-900">Additional Message</h3>
              <p>{formData.message}</p>
            </div>
          </MotionItem>
        )}

        {/* Actions */}
        <MotionItem>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={prevStep}
              disabled={isSubmit}
              className="px-6 py-3 border rounded-lg cursor-pointer inline-flex items-center gap-2 hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!formData.date || isSubmit}
              className="px-6 py-3 bg-primary cursor-pointer text-white rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50 transition"
            >
              Confirm & Submit
            </button>
          </div>
        </MotionItem>

      </div>
      <Toaster position="bottom-center" />
    </MotionContainer>
  );
};

export default Summary;
