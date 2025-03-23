"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';

function App() {
  const serviceId: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId: string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publicKey: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all the fields');
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
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      console.log('Message sent successfully:', result.text);
      alert('Message sent successfully!');

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-800 dark:to-indigo-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-indigo-100">We'd love to hear from you. Let's start a conversation.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-indigo-400 text-center">Contact Information</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {[
              { icon: MapPin, title: "Our Location", text: "123 Innovation Drive\nTech Valley, CA 94043" },
              { icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
              { icon: Mail, title: "Email", text: "contact@company.com" },
            ].map(({ icon: Icon, title, text }, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="bg-indigo-100 dark:bg-gray-800 p-3 rounded-full transition-transform duration-300 hover:scale-110">
                  <Icon className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-300">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900 transition-shadow duration-500">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg dark:shadow-gray-900 p-6 md:p-8 transition-shadow duration-500">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Send us a Message</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              { id: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder={placeholder}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition-all duration-200 
                ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 active:bg-indigo-800"
                }`}
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
