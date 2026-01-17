import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormData } from "./BookingWIzard";
import MyDatePicker from "../DatePicker/MyDatePicker";

type Props = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    nextStep: () => void;
    prevStep: () => void;
};

const timeSlots = {
    morning: [
        "07:00 - 08:00 am",
        "08:00 - 09:00 am",
        "09:00 - 10:00 am",
        "10:00 - 11:00 am",
        "11:00 - 12:00 am",
    ],
    afternoon: [
        "12:00 - 01:00 pm",
        "01:00 - 02:00 pm",
        "02:00 - 03:00 pm",
        "03:00 - 04:00 pm",
    ],
    evening: [
        "04:00 - 05:00 pm",
        "05:00 - 06:00 pm",
        "06:00 - 07:00 pm",
        "07:00 - 08:00 pm",
    ],
};


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

                <div className="p-4 border mt-4 border-gray-300">
                    <label className="block mb-2 font-medium">Time Slot</label>

                    {Object.entries(timeSlots).map(([period, slots]) => (
                        <div key={period} className="mb-4">
                            <h4 className="font-semibold capitalize mb-2">{period}</h4>

                            <div className="grid grid-cols-2 gap-3">
                                {slots.map((slot) => {
                                    const isActive = formData.time === slot;

                                    return (
                                        <div
                                            key={slot}
                                            onClick={() =>
                                                setFormData((prev) => ({ ...prev, time: slot }))
                                            }
                                            className={`
                                            p-1 rounded-md text-center border cursor-pointer transition
                                            ${isActive
                                                    ? "bg-gray-300 border-gray-400 shadow-md"
                                                    : "bg-white border-gray-200 hover:border-blue-400"
                                                }
                                            `}
                                        >
                                            {slot}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
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
