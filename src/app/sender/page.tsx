"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import FileUpload from "./FileUpload";
import StepCard from "./StepCard";
import ProgressIndicator from "./Progess";
import CodeDisplay from "./CodeDisplay";
import TransferStatus from "./TransferStatus";
import { ArrowLeft } from "lucide-react";


const Sender = () => {
  const [file, setFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [secureCode, setSecureCode] = useState<string | null>(null);
  const [transferStatus, setTransferStatus] = useState<
    "pending" | "transferring" | "completed" | "error" | null
  >(null);
  const [transferProgress, setTransferProgress] = useState(0);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    if (selectedFile) {
      setCurrentStep(1);
      setSecureCode(null);
      setTransferStatus(null);
    }
  };

  const handleGenerateCode = () => {
    setCurrentStep(2);
    setTimeout(() => {
      setSecureCode("47X9A2");
      setCurrentStep(3);
    }, 1500);
  };

  const simulateTransfer = () => {
    setTransferStatus("transferring");
    setCurrentStep(4);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setTransferProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTransferStatus("completed");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      <AnimatedBackground />

      <main className="pt-32 pb-20 px-6">
        <section className="container max-w-7xl mx-auto text-center">
          <div
            className="mx-auto max-w-3xl mb-16"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <div className="inline-block mb-4">
              <span className="text-black dark:text-white px-4 py-1.5 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-800">
                Secure File Sharing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-indigo-400 mb-6 leading-tight">
              Share files with <span className="text-primary">end-to-end</span>{" "}
              encryption
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              No accounts, no hassle—just secure file sharing with a one-time
              code. Fast, private, and designed for security.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-24">
            {!secureCode && !transferStatus && (
              <FileUpload onFileChange={handleFileChange} />
            )}

            {file && !secureCode && !transferStatus && (
              <div className="mt-8 text-center">
                <button onClick={handleGenerateCode} className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg transition duration-300 font-medium">
                  Generate Secure Code
                </button>
              </div>
            )}

            {secureCode && !transferStatus && (
              <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg p-8 max-w-lg mx-auto transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                <CodeDisplay code={secureCode} />
                <div className="mt-8 text-center">
                  <button
                    onClick={simulateTransfer}
                    className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 font-medium"
                  >
                    Simulate Transfer
                  </button>
                </div>
              </div>
            )}

            {transferStatus && (
              <div className="max-w-lg mx-auto">
                <TransferStatus
                  status={transferStatus}
                  progress={transferProgress}
                />
              </div>
            )}

            <div className="mt-12">
              <ProgressIndicator currentStep={currentStep} totalSteps={4} />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="container max-w-7xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-indigo-400">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Send files instantly with our simple 4-step process. No accounts
              needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[...Array(4)].map((_, index) => (
              <StepCard
                key={index}
                number={index + 1}
                title={
                  [
                    "Select Your File",
                    "Generate a Secure Code",
                    "Share the Code",
                    "Transfer & Confirm",
                  ][index]
                }
                description={
                  [
                    "Click 'Choose File' and upload the file you want to send securely.",
                    "Click 'Send' to create a unique one-time code for secure transfer.",
                    "Send the generated code to your recipient—they'll use it to retrieve the file.",
                    "Once the recipient enters the code, the file transfers instantly with confirmation.",
                  ][index]
                }
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                    />
                  </svg>
                }
                className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-lg flex flex-col items-start transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-3 hover:shadow-2xl"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sender;
