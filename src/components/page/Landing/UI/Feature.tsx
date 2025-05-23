import React from "react";
import { Lock, Zap, KeyRound } from "lucide-react";


interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "End-to-End Encrypted",
    description:
      "Your files are encrypted before they leave your computer, ensuring complete privacy.",
    icon: Lock,
  },
  {
    title: "Fast",
    description:
      "Direct peer-to-peer transfer means your files move at maximum speed of uploading 3Mbps and downloading at 500-600 Kbps.",
    icon: Zap,
  },
  {
    title: "Simple Code Words",
    description:
      "Connect using short, human-readable codes instead of complex passwords.",
    icon: KeyRound,
  },
  {
    title: "Private & Secure",
    description:
      "Your files remain confidential, protected with advanced encryption methods.",
    icon: Lock,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <>
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
      Features
        </h2>
    <div className=" text-black dark:text-white py-1 px-6 md:px-12 lg:px-24 rounded-3xl relative flex flex-col md:flex-row items-center transition-colors duration-500">
      {/* Left Side - Text + GIF */}
      
      <div className="max-w-lg md:w-1/2">
      
        <h2 className="text-2xl md:text-2xl font-bold text-blue-500">
          Secure & Fast File Transfers
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Experience seamless file transfers with end-to-end encryption and
          human-readable codes for maximum security.
        </p>

        {/* File Sharing GIF */}
        <video  src="https://cdn.dribbble.com/userupload/16940557/file/original-847fc790ff534b885d67b99b2c9be70f.mp4" preload="auto" playsInline={true} muted={true}></video>
        {/* <Image 
          src="https://i.gifer.com/NTHO.gif" // Replace with actual GIF URL
          alt="File Sharing Animation"
          className="mt-6 rounded-xl shadow-lg min-w-0.5 w-150 h-80"
        /> */}
      </div>

      {/* Right Side - Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:mt-0 md:ml-12 md:w-1/2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-lg flex flex-col items-start transition-transform duration-500 ease-out hover:-translate-y-4 hover:rotate-3 hover:shadow-2xl"
          >
            <feature.icon className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mt-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FeatureSection;
