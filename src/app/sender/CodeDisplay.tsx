import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeDisplayProps {
  code: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null; // Store timeout ID

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      // Clear any existing timeout to prevent multiple timeouts running
      if (timeoutId) clearTimeout(timeoutId);

      // Reset copied state after 2 seconds
      timeoutId = setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      {/* Title & Description */}
      <h3 className="text-lg font-semibold mb-1 text-foreground">
        Your Secure Code
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Share this code with the recipient to complete the transfer.
      </p>

      {/* Code Box */}
      <div className="relative w-full max-w-xs">
        <div className="bg-secondary rounded-xl overflow-hidden border border-border p-0.5">
          <div className="bg-white dark:bg-gray-900 rounded-lg py-3 px-4 flex justify-center space-x-2">
            {code.split("").map((char, i) => (
              <div
                key={i}
                className="w-10 h-12 rounded-md bg-secondary dark:bg-gray-800 flex items-center justify-center text-xl font-mono font-bold text-foreground"
              >
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className={cn(
            "mt-3 w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2",
            isCopied
              ? "bg-green-50 dark:bg-green-800 text-green-600 dark:text-green-300 border border-green-200 dark:border-green-700"
              : "bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/15 dark:hover:bg-primary/25"
          )}
        >
          {isCopied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
              </svg>
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeDisplay;
