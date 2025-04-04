"use client";
import React, { useState } from "react";
import {
  Send,
  Bug,
  Lightbulb,
  MessageSquare,
  HelpCircle,
  MapPin,
} from "lucide-react";
import { Footer } from "@/components/footer";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material"; 

type FeedbackType = "suggestion" | "bug" | "feedback";

export default function Suggestion() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ open: false, severity: "success", message: "" });

  const serviceId: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId: string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SUGGESTION as string;
  const publicKey: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "suggestion" as FeedbackType,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ open: true, severity: "warning", message: "Please fill all the fields" });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          type: formData.type,
          message: formData.message,
        },
        publicKey
      );
      console.log("Message sent successfully:", result.text);
      setAlert({ open: true, severity: "success", message: "Message sent successfully!" });
      
      setFormData({
        name: "",
        email: "",
        type: "suggestion",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setAlert({ open: true, severity: "error", message: "Failed to send message. Please try again." });
    }

    setIsSubmitting(false);
    // Reset form

  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="min-h-screen  bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500">
        {/* Map Section */}
        <div className="w-full h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3742.1016633315103!2d85.8219648752368!3d20.296058681176216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE3JzQ1LjgiTiA4NcKwNDknMjguMyJF!5e0!3m2!1sen!2sin!4v1743799566121!5m2!1sen!2sin" 
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-50/90 to-transparent h-20"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          {/* Location Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700  rounded-xl shadow-lg p-6 mb-12 flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-white dark:text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold  text-accent-50">
                Our Location
              </h2>
              <p className=" mt-1 text-accent-50">
                Bhubaneswar
              </p>
              <p className="text-accent-50">
              Odisha, India
              </p>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <MessageSquare className="h-12 w-12 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-accent-50 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-accent-50">
              We value your feedback! Help us improve by sharing your
              suggestions or reporting issues.
            </p>
          </div>

          {/* Contact Form */}
          <div className=" bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm p-3 transition-all duration-300 ease-in-out placeholder-gray-400 dark:placeholder-gray-500 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm p-3 transition-all duration-300 ease-in-out placeholder-gray-400 dark:placeholder-gray-500 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Feedback Type */}
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Feedback Type
                </label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm p-3 transition-all duration-300 ease-in-out placeholder-gray-400 dark:placeholder-gray-500 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/50"
                >
                  <option
                    value="suggestion"
                    className="text-black dark:text-white"
                  >
                    💡 Suggestion
                  </option>
                  <option value="bug" className="text-black  dark:text-white">
                    🐛 Bug Report
                  </option>
                  <option
                    value="feedback"
                    className="text-black  dark:text-white"
                  >
                    💭 General Feedback
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm p-3 transition-all duration-300 ease-in-out placeholder-gray-400 dark:placeholder-gray-500 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/50"
                  placeholder="Please provide detailed information about your suggestion or the issue you're experiencing..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium duration-200 text-white
                    ${isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 active:bg-indigo-800"
                    }`}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Feedback
                </button>
              </div>
            </form>

            
      {/* MUI Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity as any}>
          {alert.message}
        </Alert>
      </Snackbar>

            {/* Help Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 dark:text-accent-50 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-indigo-600" />
                Need Help?
              </h3>
              <div className="mt-4 flex space-x-6">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-accent-50 flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-amber-500" />
                    Suggestions
                  </h4>
                  <p className="mt-2 text-sm text-gray-500 dark:text-accent-50">
                    Share your ideas on how we can improve our services and
                    features.
                  </p>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-accent-50 flex items-center">
                    <Bug className="h-4 w-4 mr-2 text-red-500" />
                    Bug Reports
                  </h4>
                  <p className="mt-2 text-sm text-gray-500 dark:text-accent-50">
                    Found an issue? Help us improve by reporting bugs and
                    technical problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
