"use client";
import React, { useState } from "react";
import {
  MessageCircleQuestion,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Shield,
  FileBox,
  Smartphone,
  Map as RoadMap,
  Building2,
  Github,
  AlertTriangle,
  MessagesSquare,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Is Wormhole secure?",
      answer: (
        <div className="space-y-4">
          <p>
            Every design decision in Wormhole begins with the safety and privacy of your data in mind. We can't read your files, and no one else can either. Privacy isn't an optional mode — it's just the way that Wormhole works.
          </p>
          <p>
            Wormhole uses end-to-end encryption to protect your files so they can never be shared or viewed by anyone but you and the intended recipients. Files are permanently deleted from the server after 24 hours.
          </p>
        </div>
      ),
      icon: <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />,
    },
    {
      question: "What's the maximum file size?",
      answer: (
        <div className="space-y-4">
          <p>For files up to 2 GB.</p>
          <p>For files larger than 2 GB, Wormhole uses peer-to-peer transfer to send your files directly from your browser to the recipient.</p>
        </div>
      ),
      icon: <FileBox className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      question: "Is there a mobile app?",
      answer: "We're working on mobile apps! In the meantime, the Wormhole website works great on mobile devices.",
      icon: <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    },
    {
      question: "What features are coming soon?",
      answer: (
        <p>
          we're working on some new features adding soon... 
          
          {/* <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Roadmap <ExternalLink className="h-4 w-4 inline" />
          </a>. */}
        </p>
      ),
      icon: <RoadMap className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    },
    {
      question: "What is the business model?",
      answer:
        "We're planning to introduce a Pro plan for larger file limits and explore an enterprise version for high-security organizations.",
      icon: <Building2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      question: "Is this an open-source project?",
      answer:
        "The source code for the streaming encryption implementation is open source. The full client and server code may be open sourced in the future.",
      icon: <Github className="h-6 w-6 text-gray-800 dark:text-gray-400" />,
    },
    {
      question: "How can I report a security vulnerability?",
      answer:
        "If you believe you've found a security vulnerability in Wormhole, please report it. We offer rewards of up to $1,000 for valid security issues.",
      icon: <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MessageCircleQuestion className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-indigo-400 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're working to make Wormhole the best file-sending tool. If you have a question, come ask it in our Discord server!
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-indigo-400/50 transition-all duration-300"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-start space-x-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-indigo-400">{item.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                  <div
                    className={`mt-2 text-gray-600 dark:text-gray-400 transition-all duration-300 overflow-hidden ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Discord CTA */}
        <div className="mt-16 bg-indigo-600 dark:bg-indigo-700 rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Got a question that isn't answered here?</h2>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <MessagesSquare className="h-6 w-6 mr-2" />
             contact Us !
          </a>
        </div>
      </div>
    </div>
  );
}
