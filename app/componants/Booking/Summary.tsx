import { ArrowLeft } from "lucide-react";
import { FormData, ServiceType } from "./BookingWIzard";
import { Toaster, toast } from 'sonner';
import { useRouter } from "next/navigation";

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
  const router = useRouter()

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
      setTimeout(()=> {
        router.push("/");
      },2000)
    } else {
      toast.error("Failed to send booking")
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-3xl border-2 border-gray-300 shadow-xl p-1">
        {/* Inner Card */}
        <div className="bg-white rounded-3xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Confirm Your Booking
          </h2>
          <p className="text-center text-gray-500">
            One last check before we schedule your service
          </p>


          {/* Main Info */}
          <div className="relative bg-blue-50 border-l-4 border-blue-600 rounded-xl p-5 space-y-3">
            <p className="text-gray-800 leading-relaxed text-base">
              You have booked{" "}
              <span className="font-semibold text-blue-700">
                {formData.service && serviceNames[formData.service]}
              </span>{" "}
              on{" "}
              <span className="font-semibold">
                {formData.date?.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>{" "}
              starting at{" "}
              <span className="font-semibold text-blue-700">{formData.time}</span>{" "}
              for{" "}
              <span className="font-semibold text-blue-700">
                {formData.duration} hour{formData.duration > 1 ? "s" : ""}
              </span>.
            </p>

            <p className="text-gray-700">
              Service location:
              <br />
              <span className="font-medium text-gray-900">{formData.address}</span>
            </p>
          </div>


          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Customer Name", value: formData.name },
              { label: "Phone", value: formData.phone },
              { label: "Email", value: formData.email },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>


          {/* Message */}
          {formData.message && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4">
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
      <Toaster position="top-right" />
    </section>
  );
};


export default Summary
