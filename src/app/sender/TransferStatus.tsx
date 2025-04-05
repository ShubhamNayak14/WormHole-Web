import React from "react";

interface TransferStatusProps {
  status: "pending" | "transferring" | "completed" | "error";
  progress?: number;
  errorMessage?: string;
}

const TransferStatus: React.FC<TransferStatusProps> = ({
  status,
  progress = 0,
  errorMessage,
}) => {
  const statusConfig = {
    pending: {
      icon: (
        <svg
          className="w-10 h-10 text-blue-500 dark:text-blue-400 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Waiting for recipient",
      description: "The file is ready to be transferred.",
    },
    transferring: {
      icon: (
        <svg
          className="w-10 h-10 text-blue-500 dark:text-blue-400 animate-spin"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
      title: "Transferring...",
      description: "Your file is being securely transferred.",
    },
    completed: {
      icon: (
        <svg
          className="w-10 h-10 text-green-500 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: "Transfer Complete!",
      description: "Your file has been successfully delivered.",
    },
    error: {
      icon: (
        <svg
          className="w-10 h-10 text-red-500 dark:text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Transfer Failed",
      description: errorMessage || "An error occurred during the transfer.",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg transition-all duration-500">
      {/* Status Icon */}
      <div className="mb-4">{currentStatus.icon}</div>

      {/* Title & Description */}
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {currentStatus.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
        {currentStatus.description}
      </p>

      {/* Progress Bar (for transferring state) */}
      {status === "transferring" && (
        <div className="w-full max-w-md mt-2">
          <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
            {progress}%
          </div>
        </div>
      )}

    
    </div>
  );
};

export default TransferStatus;
