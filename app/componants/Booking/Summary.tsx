
import { ArrowLeft } from "lucide-react";
import { FormData, ServiceType } from "./BookingWIzard";
import { Toaster, toast } from 'sonner';

type Props = {
  formData: FormData;
  prevStep: () => void;
};


const serviceNames: Record<ServiceType, string> = {
  normal: 'Normal Cleaning',
  deep: 'Deep Cleaning',
  maid: 'Maid Service',
  office: 'Office Cleaning',
}

const Summary = ({ formData, prevStep }: Props) => {
  const handleSubmit = async () => {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        date: formData.date?.toISOString(),
      }),
    });

    const result = await res.json();
    if (result.success) {
      toast.success("Booking sent successfully!")
    } else {
      toast.error("Failed to send booking")
    }
  };

  return (
    <section className="border border-gray-300 p-6 flex items-center">
      <div className="max-w-3xl mx-auto px-4 w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Confirm Your Booking
          </h2>
          <p className="text-center text-gray-500">
            Please review the details before submitting
          </p>

          {/* Main Info */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-3">
            <p className="text-gray-700">
              You have selected{" "}
              <span className="font-semibold text-blue-700">
                {formData.service && serviceNames[formData.service]}
              </span>{" "}
              on{" "}
              <span className="font-semibold">
                {formData.date
                  ? formData.date.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                  : "No date selected"}
              </span>{" "}
              at{" "}
              <span className="font-semibold text-blue-700">
                {formData.time}
              </span>
              .
            </p>

            <p className="text-gray-700">
              The service will be provided at:
              <br />
              <span className="font-medium">{formData.address}</span>
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Customer Name</p>
              <p className="font-medium text-gray-900">{formData.name}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-gray-900">{formData.phone}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">{formData.email}</p>
            </div>
          </div>

          {/* Message */}
          {formData.message && (
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Additional Message</p>
              <p className="text-gray-800">{formData.message}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-8">

            <button
              onClick={prevStep}
              className="px-6 py-3 cursor-pointer border rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleSubmit}
              disabled={!formData.date}
              className="px-6 py-3 cursor-pointer inline-flex gap-2 bg-blue-600 items-center text-white rounded-lg disabled:opacity-50"
            >
              Confirm & Submit
            </button>
          </div>
        </div>
      </div>
      <Toaster position="top-right"/>
    </section>
  );
};


export default Summary
