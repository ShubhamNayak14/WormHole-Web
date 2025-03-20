"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Transfer",
    },
    {
      text: "files",
    },
    {
      text: "effortlessly,",
    },
    {
      text: "anytime,",
    },
    {
      text: "Anywhere.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs font-bold sm:text-base  ">
       Now File sharing made simple, secure, and seamless
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
