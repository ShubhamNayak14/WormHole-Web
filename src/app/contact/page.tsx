"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import { Snackbar, Alert } from "@mui/material"; 
import type { AlertColor } from '@mui/material/Alert';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: '',
    severity: 'info',
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setAlert({ open: true, severity: "warning", message: "Please fill all the fields" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Dynamically import emailjs only when needed (client-side)
      const emailjs = (await import('@emailjs/browser')).default;
      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setAlert({ open: true, severity: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setAlert({ open: true, severity: "error", message: "Failed to send message. Please try again." });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isClient) {
    return <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]"></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-indigo-100">We&rsquo;d love to hear from you. Let&rsquo;s start a conversation.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-indigo-400 text-center">Contact Information</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {[
              { icon: MapPin, title: "Our Location", text: "Odisha, India" },
              { icon: Phone, title: "Phone", text: "+91 881572XXXX" },
              { icon: Mail, title: "Email", text: "shubhamnayak446@gmail.com" },
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835014.6514888075!2d81.7953700569658!3d20.170249755038604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a226aece9af3bfd%3A0x133625caa9cea81f!2sOdisha!5e0!3m2!1sen!2sin!4v1743777752347!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ filter: 'blueGrey(100%)', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
      
      {/* MUI Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactPage;