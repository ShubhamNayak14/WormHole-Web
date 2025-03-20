"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between"> 
    
      <BackgroundGradient className="p-4 sm:p-10 bg-white dark:bg-zinc-900 rounded-[22px] m-1" containerClassName="rounded-[22px] w-[100%] md:w-[50%] ld:w-[25%] ">
        <div className="flex justify-center items-center">
          <Image
            src={`/share-link.png`}
            alt="jordans"
            height="100"
            width="100"
            className="object-contain"
          />
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         1. Send Files
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Select files and get a code word

        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">

        </button>
      </BackgroundGradient>
      <BackgroundGradient className="p-4 sm:p-10 bg-white dark:bg-zinc-900 rounded-[22px] m-1" containerClassName="rounded-[22px] w-[100%] md:w-[50%] ld:w-[25%]  ">
        <div className="flex justify-center items-center">
          <Image
            src={`/download.png`}
            alt="jordans"
            height="100"
            width="100"
            className="object-contain"
          />
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          2. Share Code
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Give the code to your recipient

        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">

        </button>
      </BackgroundGradient>
      <BackgroundGradient className="p-4 sm:p-10 bg-white dark:bg-zinc-900 rounded-[22px] m-1" containerClassName="rounded-[22px] w-[100%] md:w-[50%] ld:w-[25%] ">
     
         <div className="flex justify-center items-center">
          <Image
            src={`/responsive-design.png`}
            alt="jordans"
            height="100"
            width="100"
            className="object-contain"
          />
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          3. Receive Files
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
      
        Enter code to get your files
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">

        </button>
      </BackgroundGradient>
      <BackgroundGradient className="p-4 sm:p-10 bg-white dark:bg-zinc-900 rounded-[22px] m-1" containerClassName="rounded-[22px] w-[100%] md:w-[50%] ld:w-[25%] ">
     
     <div className="flex justify-center items-center">
      <Image
        src={`/responsive-design.png`}
        alt="jordans"
        height="100"
        width="100"
        className="object-contain"
      />
    </div>
    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
      3. Receive Files
    </p>

    <p className="text-sm text-neutral-600 dark:text-neutral-400">
  
    Enter code to get your files
    </p>
    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">

    </button>
  </BackgroundGradient>
    </div>
  );
}
