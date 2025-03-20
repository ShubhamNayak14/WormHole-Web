import React from "react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-3xl px-4">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <React.Fragment key={i}>
            {/* Step Dot */}
            <div className="flex flex-col items-center relative">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ease-out shadow-md",
                  i < currentStep
                    ? "bg-indigo-500 text-white shadow-lg"
                    : i === currentStep
                    ? "bg-indigo-400/20 text-indigo-500 border-2 border-indigo-500"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                )}
              >
                {i < currentStep ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className="text-xs font-medium mt-2 text-gray-600 dark:text-gray-400">
                Step {i + 1}
              </span>
            </div>

            {/* Connecting Line */}
            {i < totalSteps - 1 && (
              <div
                className={cn(
                  "h-1 flex-1 mx-2 rounded-full transition-all duration-500",
                  i < currentStep - 1
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-400"
                    : i === currentStep - 1
                    ? "bg-gradient-to-r from-indigo-400 to-gray-400 dark:to-gray-700"
                    : "bg-gray-300 dark:bg-gray-700"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
