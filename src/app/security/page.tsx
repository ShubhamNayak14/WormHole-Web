"use client"

import React from 'react';
import {
  Lock,
  Key,
  RefreshCw,
  UserX2,
  Globe2,
  Shield,
  XCircle,
  FileCode2,
} from 'lucide-react';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer), { 
  ssr: false 
});

function SecurityFeature({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02]">
      <div className="flex items-start space-x-4">
        <div className="bg-indigo-100 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold  text-black dark:text-white mb-2">{title}</h3>
          <p className=" text-black dark:text-white leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data transferred through Magic Wormhole is encrypted using strong cryptographic techniques, ensuring that only the sender and receiver can access the file or message."
    },
    {
      icon: Key,
      title: "PAKE (Password-Authenticated Key Exchange)",
      description: "Uses a short, human-readable code to establish a secure connection. Prevents man-in-the-middle (MITM) attacks by ensuring both parties authenticate each other."
    },
    {
      icon: RefreshCw,
      title: "Ephemeral Connections",
      description: "No persistent user accounts or long-term encryption keys. Each wormhole session is temporary and only valid for a single transfer."
    },
    {
      icon: UserX2,
      title: "Metadata Privacy",
      description: "The system does not expose file names, sizes, or user identities to any third party. Only the participants of the session know about the transfer."
    },
    {
      icon: Globe2,
      title: "No Central Storage",
      description: "Files are never stored on a central server. The data is sent directly between sender and receiver over an encrypted channel."
    },
    {
      icon: Shield,
      title: "Forward Secrecy",
      description: "Uses Elliptic Curve Cryptography (ECC) for secure key exchange. Ensures that even if a session key is compromised, past communications remain secure."
    },
    {
      icon: XCircle,
      title: "Code Expiration & Replay Protection",
      description: "The wormhole code is single-use and expires after a short time. Protects against replay attacks, preventing malicious reuse of previous codes."
    },
    {
      icon: FileCode2,
      title: "Open-Source & Auditable",
      description: "The protocol and implementation are open-source, allowing public scrutiny. No hidden backdoors—security can be independently verified."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-indigo-500 sm:text-5xl md:text-6xl">
              Enterprise-Grade Security
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your data security is our top priority. Discover how we protect your information
              with state-of-the-art encryption and security measures.
            </p>
          </div>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {features.map((feature, index) => (
            <SecurityFeature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;