"use client";
import { Send, Inbox, ArrowLeft ,Upload, Download} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sender from "../sender/page";

export default function RoleSelection() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"sender" | "receiver">();

  const handleRoleSelect = (role: "sender" | "receiver") => {
    setSelectedRole(role);
    router.push(`/${role}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header with hierarchical structure */}
        <div className="mb-12">
        <div className="flex justify-center mb-6">
          <Upload className="h-16 w-16 text-indigo-600 dark:text-indigo-400" /> {/* New Icon */}
        </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-indigo-100 mb-4">
          How will you use the platform?
          </h1>
          <h2 className="text-lg text-gray-600 dark:text-indigo-300">
            WornHole
          </h2>
          <p className="text-gray-600 dark:text-indigo-300 mt-2">
            Choose your role to get started with the right experience
          </p>
        </div>

        {/* Role Cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
          {/* Sender Card */}
          <div 
            onClick={() => handleRoleSelect("sender")}
            className={`flex-1 max-w-sm p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 
              ${selectedRole === "sender" 
                ? "ring-2 ring-indigo-600 dark:ring-indigo-400 bg-white dark:bg-indigo-900" 
                : "bg-white dark:bg-gray-800 hover:shadow-xl hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/20"}`}
          >
            <Send className="h-12 w-12 text-green-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-indigo-100 mb-4">
              Sender
            </h3>
            <p className="text-gray-600 dark:text-indigo-300">
              Send files, messages, and data securely to recipients
            </p>
          </div>

          {/* Receiver Card */}
          <div
            onClick={() => handleRoleSelect("receiver")}
            className={`flex-1 max-w-sm p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 
              ${selectedRole === "receiver" 
                ? "ring-2 ring-indigo-600 dark:ring-indigo-400 bg-white dark:bg-indigo-900" 
                : "bg-white dark:bg-gray-800 hover:shadow-xl hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/20"}`}
          >
            <Download className="h-12 w-12 text-indigo-600 mx-auto duration-100 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-indigo-100 mb-4">
              Receiver
            </h3>
            <p className="text-gray-600 dark:text-indigo-300">
              Receive and manage incoming files, messages, and data
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-indigo-400">
          You can change your role later in settings
        </p>
      </div>
    </div>
  );
}

// Add these components for the destination pages

export function ReceiverPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-8">
      <button 
        onClick={() => router.back()}
        className="mb-8 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Role Selection
      </button>
    </div>
  );
}