"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
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
import { AlertColor } from "@mui/material/Alert";

// Inline SearchCodeFetcher to handle secureCode
function SearchCodeFetcher({ onCode }: { onCode: (code: string) => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const secureCode = searchParams.get("secureCode");
    if (secureCode) {
      onCode(secureCode);
    }
  }, [searchParams, onCode]);

  return null;
}

export default function App() {
  const [code, setCode] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [filename, setFilename] = useState("received_file");
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "info",
  });

  const router = useRouter();
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

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
        { code },
        {
          responseType: "blob",
          headers: { "Content-Type": "application/json" },
        }
      );

      const contentDisposition = response.headers["content-disposition"];
      const suggestedName = contentDisposition?.match(/filename="?(.+)"?/)?.[1];
      if (suggestedName) setFilename(suggestedName);

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

      let currentProgress = 0;
      progressInterval.current = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          if (progressInterval.current) clearInterval(progressInterval.current);
          setIsDownloading(false);
          setIsCompleted(true);
          setAlert({
            open: true,
            message: "File received successfully!",
            severity: "success",
          });
        }
      }, 300);
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
    setFilename("received_file");
    setProgress(0);
    setIsCompleted(false);
  };

  const handleBackToSender = () => {
    router.push("/sender");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center p-4">
      <Suspense fallback={null}>
        <SearchCodeFetcher onCode={setCode} />
      </Suspense>

      <div className="bg-white dark:bg-[#1a1a1a] dark:text-white rounded-2xl shadow-2xl p-8 w-full max-w-md transition-colors duration-500">
        {isCompleted ? (
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 p-3 rounded-full">
                <CheckCircle size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">File Received Successfully!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Your file has been received.
            </p>
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
                className="w-full py-3 px-4 rounded-lg text-gray-700 dark:text-white font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 flex items-center justify-center gap-2"
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

            <h1 className="text-2xl font-bold text-center mb-6">
              Receive Your File
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-sm text-red-500 mb-1">
                  🔒 Note: One secure code is valid for{" "}
                  <strong>one-time use only</strong>.
                </p>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium mb-2"
                >
                  Enter Your Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="block w-full px-4 py-3 text-black dark:text-accent-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your code here"
                  />
                  <Download
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              {downloadUrl && (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
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
                      <p className="text-sm text-right">{progress}%</p>
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

      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity}
          variant="filled"
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
