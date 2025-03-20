import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top gradient (light/dark mode support) */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-50/60 dark:from-gray-900/60 to-transparent"></div>

      {/* Floating blurred circles */}
      <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-blue-200/30 dark:bg-blue-800/30 blur-[80px] motion-safe:animate-float" />
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-blue-100/40 dark:bg-blue-700/30 blur-[100px] motion-safe:animate-float delay-1000" />
      <div className="absolute bottom-[15%] left-[25%] w-[350px] h-[350px] rounded-full bg-blue-300/20 dark:bg-blue-600/30 blur-[90px] motion-safe:animate-float delay-2000" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMGY1ZmYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjZTZlZmZmIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-[0.05] dark:opacity-[0.02]"></div>
    </div>
  );
};

export default AnimatedBackground;
