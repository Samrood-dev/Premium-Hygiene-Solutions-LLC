"use client"
import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

type FormData = {
    name: string
    email: string
    phone: string
    message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
        if (errors[name as keyof FormData]) {
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
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length === 0) {
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>

                        {success && (
                            <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center">
                                <CheckCircle className="h-5 w-5 mr-2" />
                                <span>Thank you! Your message has been sent successfully.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
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
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600">info@PremiumHyper.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                    <p className="text-gray-600">123 Clean Street, Suite 100<br />Cityville, ST 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;