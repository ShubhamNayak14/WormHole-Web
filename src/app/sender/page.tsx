"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import AnimatedBackground from "./AnimatedBackground";
import FileUpload from "./FileUpload";
import StepCard from "./StepCard";
import ProgressIndicator from "./Progess";
import CodeDisplay from "./CodeDisplay";
import TransferStatus from "./TransferStatus";
import { QRCodeCanvas } from "qrcode.react";
import { Snackbar, Alert } from "@mui/material"; 
import { AlertColor } from '@mui/material/Alert';



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
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: '',
    severity: 'info',
  });
  

  const handleFileTransfer = async () => {
    if (!file) return;
  
    setTransferStatus("transferring");
    setCurrentStep(2);
  
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 10;
      setTransferProgress(progress);
    }, 600);
  
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await axios.post(
        "https://wormhole-server-production.up.railway.app/send",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      clearInterval(progressInterval);
      setTransferProgress(100);
      setTransferStatus("completed");
      setSecureCode(response.data.code);
      setTimeout(() => setCurrentStep(3), 1000);
  
      setAlert({ open: true, severity: "success", message: "File successfully sent!" });
    } catch (error) {
      clearInterval(progressInterval);
      setTransferStatus("error");
  
      setAlert({ open: true, severity: "error", message: "File transfer failed. Please try again!" });
      console.error("File transfer failed:", error);
    }
  };
  const resetProcess = () => {
    setFile(null);
    setSecureCode(null);
    setTransferStatus(null);
    setTransferProgress(0);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      <AnimatedBackground />

      <main className="pt-32 pb-20 px-6">
        <section className="container max-w-7xl mx-auto text-center">
          <div className="mx-auto max-w-3xl mb-16">
            <div className="inline-block mb-4">
              <span className="text-black dark:text-white px-4 py-1.5 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-800">
                Secure File Sharing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-indigo-400 mb-6 leading-tight">
              Share files with end-to-end encryption
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              No accounts, no hassle—just secure file sharing with a one-time
              code. Fast, private, and designed for security.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-24">
            {/* Step 1: File Upload */}
            {currentStep === 1 && !secureCode && !transferStatus && (
              <FileUpload onFileChange={handleFileChange} />
            )}

            {file && currentStep === 1 && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleFileTransfer}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg transition duration-300 font-medium"
                >
                  Start Transfer
                </button>
              </div>
            )}

            {/* Step 2: Transfer Progress */}
            {currentStep === 2 && transferStatus && (
              <div className="max-w-lg mx-auto">
                <TransferStatus
                  status={transferStatus}
                  progress={transferProgress}
                />
              </div>
            )}

            {/* Step 3: Show Generated Code */}

            {currentStep === 3 && secureCode && (
              <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg p-8 max-w-lg mx-auto transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                {/* QR Code (Magic Wormhole Style) */}
                <div className="flex justify-center mt-6">
                  <QRCodeCanvas
                    value={`http://localhost:3000/receiver?secureCode=${secureCode}`}
                    size={180} // Adjust size
                    bgColor="transparent"
                    fgColor="#6366f1" // Indigo color for wormhole look
                    level="H" // High error correction for scanning
                    includeMargin={true}
                    className="rounded-lg shadow-xl "
                  />
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Scan this QR code to securely receive the file.
                </p>
                {/* Secure Code Display */}
                <CodeDisplay code={secureCode} />

                {/* Share Another File Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={resetProcess}
                    className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 shadow-lg transition duration-300 font-medium"
                  >
                    Share Another File
                  </button>
                </div>
              </div>
            )}

            <div className="mt-12">
              <ProgressIndicator currentStep={currentStep} totalSteps={3} />
            </div>
            <div>
              {/* Back Button */}
              <Link href="/main">
                <button
                  className="mt-5 lg:gap-20 lg:px-20 gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                         rounded-full shadow-md transition-transform duration-300 
                         hover:-translate-x-1 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  <span>Back to Main</span>
                </button>
              </Link>
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
              Send files instantly with our simple 3-step process. No accounts
              needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[...Array(3)].map((_, index) => (
              <StepCard
                key={index}
                number={index + 1}
                title={
                  [
                    "Select Your File",
                    "Securely Transfer File",
                    "Receive Secure Code",
                  ][index]
                }
                description={
                  [
                    "Click 'Choose File' and upload the file you want to send securely.",
                    "The file is encrypted and securely transferred. A progress bar shows the transfer status.",
                    "Once transfer completes, you'll get a one-time secure code to share with your recipient.",
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
      
      {/* MUI Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity }>
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Sender;
