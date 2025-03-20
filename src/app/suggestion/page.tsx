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

type FeedbackType = "suggestion" | "bug" | "feedback";

export default function Suggestion() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "suggestion" as FeedbackType,
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      type: "suggestion",
      subject: "",
      message: "",
    });
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647544339985!5w!3h370"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-50/90 to-transparent h-20"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          {/* Location Card */}
          <div className="bg-white dark:bg-indigo-500 rounded-xl shadow-lg p-6 mb-12 flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-indigo-600 dark:text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-accent-50">
                Our Location
              </h2>
              <p className="text-gray-600 mt-1 dark:text-accent-50">
                Champ de Mars, 5 Av. Anatole France,
              </p>
              <p className="text-gray-600 dark:text-accent-50">
                75007 Paris, France
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
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Feedback
                </button>
              </div>
            </form>

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
