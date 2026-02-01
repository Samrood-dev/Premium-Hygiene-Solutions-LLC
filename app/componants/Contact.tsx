"use client";
import { useState } from "react";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";
import { companyData } from "@/utils/constants";
import TriangleArrow from "./TriangleArrow";
import CheckCircle from "../Icons/CheckCircle";
import Phone from "../Icons/Phone";
import Mail from "../Icons/Mail";
import MapPin from "./MapPin";
import Clock from "../Icons/Clock";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const companyDetails = [
  {
    icon: <Phone className="h-6 w-6 text-primary mr-4 mt-1" />,
    title: "Phone",
    value: `${companyData.phone}`
  },
  {
    icon: <Mail className="h-6 w-6 text-primary mr-4 mt-1" />,
    title: "Email",
    value: `${companyData.email}`,
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />,
    title: "Address",
    value: (
      <>
        Donna tower office 11201 <br />
        Dubai silicon oasis
      </>
    ),
  },
  {
    icon: <Clock className="h-6 w-6 text-primary mr-4 mt-1" />,
    title: "Business Hours",
    value: (
      <>
        Monday to Sunday 8 am to 8pm
      </>
    ),
  },
]

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };


  const sendMessage = async () => {
    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formData,
      }),
    });

    const result = await res.json();
    if (!res.ok || !result.success) {
      throw new Error("Failed to send booking");
    }

    return result;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      await sendMessage()
      setSuccess(false)
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="bg-gray-50" >
      <TriangleArrow />
      <div className="py-10">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <MotionContainer className="text-center mb-12">
            <MotionItem>
              <h4>REACH OUT TO US</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Contact Us
              </h2>
            </MotionItem>
          </MotionContainer>

          <MotionContainer className="grid md:grid-cols-2 gap-12">

            {/* Form Section */}
            <MotionItem>
              <div>
                <MotionItem>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                </MotionItem>

                {success && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    {
                      label: "Name *",
                      name: "name",
                      type: "text",
                      value: formData.name,
                      error: errors.name,
                    },
                    {
                      label: "Email *",
                      name: "email",
                      type: "email",
                      value: formData.email,
                      error: errors.email,
                    },
                    {
                      label: "Phone *",
                      name: "phone",
                      type: "tel",
                      value: formData.phone,
                      error: errors.phone,
                    },
                  ].map((field, index) => (
                    <MotionItem key={index}>
                      <div>
                        <label htmlFor={field.name} className="block text-gray-700 text-2xl font-medium mb-2">
                          {field.label}
                        </label>
                        <input
                          id={field.name} 
                          type={field.type}
                          name={field.name}
                          value={field.value}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${field.error ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {field.error && (
                          <p className="text-red-500 text-sm mt-1">
                            {field.error}
                          </p>
                        )}
                      </div>
                    </MotionItem>
                  ))}

                  <MotionItem>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 text-2xl font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? "border-red-500" : "border-gray-300"
                          }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </MotionItem>

                  <MotionItem>
                    <button
                      type="submit"
                      disabled={success}
                      className="w-full text-2xl bg-primary cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                      Send Message
                    </button>
                  </MotionItem>
                </form>
              </div>
            </MotionItem>

            {/* Contact Info */}
            <MotionItem>
              <div>
                <MotionItem>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                </MotionItem>

                <MotionContainer className="space-y-6">
                  {companyDetails.map((item, index) => (
                    <MotionItem key={index}>
                      <div className="flex items-start">
                        {item.icon}
                        <div>
                          <h4 className="font-semibold text-2xl text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-xl">{item.value}</p>
                        </div>
                      </div>
                    </MotionItem>
                  ))}
                </MotionContainer>
              </div>
            </MotionItem>

          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
