import React from "react";

export const WormholeLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#4F46E5" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="#4F46E5" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="20" stroke="#4F46E5" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="10" stroke="#4F46E5" strokeWidth="8" fill="none" />
      </svg>
      <span className="text-xl font-bold dark:text-gray-100 text-[#1a1a1a]">WORMHOLE</span>
    </div>
  );
};
