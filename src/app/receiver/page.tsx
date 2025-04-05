"use client";

import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import {
  Download,
  Link2,
  FileDown,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertColor } from '@mui/material/Alert';


function App() {
  const [code, setCode] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: '',
    severity: 'info',
  });
  

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const secureCode = searchParams.get("secureCode");
    if (secureCode) {
      setCode(secureCode);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
      return setAlert({
        open: true,
        message: "Secure code is missing!",
        severity: "warning",
      });
    }

    setIsDownloading(true);
    setProgress(0);

    try {
      const response = await axios.post(
        "https://wormhole-server-production.up.railway.app/receive",
        { code: code },
        {
          responseType: "blob",
          headers: { "Content-Type": "application/json" },
        }
      );

      
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);

      // Simulate progress
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setIsCompleted(true);
          setAlert({
            open: true,
            message: "File received successfully!",
            severity: "success",
          });
        }
      }, 500);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
      setAlert({
        open: true,
        message: "Something went wrong during download!",
        severity: "error",
      });
    }
  };

  const handleReset = () => {
    setCode("");
    setDownloadUrl("");
    setProgress(0);
    setIsCompleted(false);
  };

  const handleBackToSender = () => {
    router.push("/sender");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "received_file";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {isCompleted ? (
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 p-3 rounded-full">
                <CheckCircle size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              File Received Successfully!
            </h2>
            <p className="text-gray-600 mb-8">Your file has been received.</p>
            <div className="space-y-4">
              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-200 bg-green-500 hover:bg-green-600 active:bg-green-700"
              >
                Download File
              </button>
              <button
                onClick={handleReset}
                className="w-full py-3 px-4 rounded-lg text-white font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all duration-200"
              >
                Download Another File
              </button>
              <button
                onClick={handleBackToSender}
                className="w-full py-3 px-4 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Sender Page
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-500 p-3 rounded-full">
                <FileDown size={32} className="text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Receive Your File
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-sm text-red-500 mb-1 ">
                  🔒 Note: One secure code is valid for{" "}
                  <strong>one-time use only</strong>.
                </p>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Enter Your Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="block w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your code here"
                  />
                  <Download
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              {downloadUrl && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Link2 size={16} />
                    <span className="truncate">{downloadUrl}</span>
                  </div>

                  {isDownloading && (
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 text-right">
                        {progress}%
                      </p>
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={!code || isDownloading}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-200 ${
                  !code || isDownloading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                }`}
              >
                {isDownloading ? "Downloading..." : "Download File"}
              </button>
            </form>
          </>
        )}
      </div>

      {/* Snackbar for feedback */}
      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity  }
          variant="filled"
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
