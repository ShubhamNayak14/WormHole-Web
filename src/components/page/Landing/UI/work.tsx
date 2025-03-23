import React from 'react';
import { Code, Link, Lock, Trash2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Wormhole Code Generation",
      description: "The sender generates a short, human-readable code (e.g., 7-crossover-clock).",
    },
    {
      icon: <Link className="w-12 h-12" />,
      title: "Peer-to-Peer Connection",
      description: "The sender and receiver connect via a secure rendezvous server.",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted, ensuring only the sender and receiver can access it.",
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: "Automatic Cleanup",
      description: "The connection closes automatically after the transfer, leaving no traces.",
    },
  ];

  return (
    <section className=" text-black dark:text-white transition-colors duration-500 py-16 mt-15">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12  text-gray-900  dark:text-gray-100">
          How Magic Wormhole Works
        </h2>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg 
              hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col items-center text-center h-full"
            >
              <div className="text-blue-600 dark:text-blue-500 mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
