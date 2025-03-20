import React from "react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative p-6 rounded-2xl shadow-lg bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105",
        className
      )}
    >
      {/* Step Number Badge */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-medium text-sm shadow-md">
        {number}
      </div>

      {/* Icon Section */}
      <div className="mb-4 w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center transition-transform duration-300 hover:scale-110">
        {icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default StepCard;
