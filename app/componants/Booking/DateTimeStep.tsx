import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormData } from "./BookingWIzard";
import MyDatePicker from "../DatePicker/MyDatePicker";

type Props = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    nextStep: () => void;
    prevStep: () => void;
};

const timeSlots = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
];


const DateTimeStep = ({ formData, setFormData, nextStep, prevStep }: Props) => {
    const isValid = formData.date && formData.time;

    return (
        <section className="bg-white border border-gray-300 p-4">
            <div className="max-w-3xl mx-auto p-4 ">
                <div className="p-4 border border-gray-300">
                    <label className="block mb-2 font-medium">Date & Time</label>
                    <MyDatePicker selected={formData.date} onSelect={(value) => {
                        if (value) {
                            setFormData((prev) => ({ ...prev, date: new Date(value) }));
                        }
                    }} />
                </div>

                <div className="p-4 border mt-4 border-gray-300 rounded-lg">
                    <label className="block mb-2 font-medium">Service Time  </label>

                    <select
                        value={formData.time}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, time: e.target.value }))
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>
                            Select a time
                        </option>

                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="p-4 border mt-4 border-gray-300 rounded-lg">
                    <label className="block mb-2 font-medium">
                        Service Duration:
                        <span className="ml-2 text-blue-600 font-semibold">
                            {formData.duration} Hour{formData.duration > 1 ? "s" : ""}
                        </span>
                    </label>

                    <input
                        type="range"
                        min={1}
                        max={8}
                        step={1}
                        value={formData.duration}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                duration: Number(e.target.value),
                            }))
                        }
                        className="w-full accent-blue-600 cursor-pointer"
                    />

                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1 hr</span>
                        <span>8 hrs</span>
                    </div>
                </div>


            </div>

            <div className="flex justify-end gap-4 mt-8">
                <button
                    onClick={prevStep}
                    className="px-6 py-3 cursor-pointer border rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 transition"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </button>

                <button
                    disabled={!isValid}
                    onClick={nextStep}
                    className="px-6 py-3 cursor-pointer inline-flex gap-2 bg-blue-600 items-center text-white rounded-lg disabled:opacity-50"
                >
                    Continue <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};

export default DateTimeStep;
