import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { BasicDetailsType } from "./BookingWIzard";

type Props = {
    formData: BasicDetailsType,
    setFormData: (params: BasicDetailsType) => void
    nextStep: () => void;
    prevStep: () => void;
    markCompleted: (params: number)=> void;
}


type FormErrors = Partial<Record<keyof BasicDetailsType, string>>;

const BasicDetails = ({ formData, setFormData, nextStep, prevStep, markCompleted }: Props) => {

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name as keyof BasicDetailsType]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';

        return newErrors;
    };

    const handleNext = async (e: any) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length === 0) {
            nextStep()
            markCompleted(3);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="booking" className=" bg-white border border-gray-300 p-6">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone number *</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Address *</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Additional Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <button
                            onClick={() => prevStep()}
                            className="px-6 py-3 border rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 transition"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            className="px-6 py-3 cursor-pointer inline-flex gap-2 bg-primary items-center text-white rounded-lg disabled:opacity-50"
                        >
                            Continue <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BasicDetails;