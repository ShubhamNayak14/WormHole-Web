"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import { div } from "framer-motion/client";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          End-to-End Encrypted
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Your files are encrypted before they leave your computer, 
          ensuring complete privacy.
          </p>
        </div>
        <Image
          src="/encrypted.png"
          width={200}
          height={200}
          alt="linear demo image"
          className="absolute right-2 bottom-5  object-contain rounded-2xl transform "

        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] lg:min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Fast
     
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Direct peer-to-peer transfer means your files move at maximum speed of 
            uploading 3Mbps And Downloading Speed 500-600 Kbps
        </p>
        <Image
          src="/lighting.png"
          width={100}
          height={100}
          alt="linear demo image"
          className="absolute right-2 bottom-5  object-contain rounded-2xl transform "

        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px] lg:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Simple Code Words
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Connect using short, human-readable codes instead of complex passwords.

          </p>
        </div>
        <Image
          src="/key.png"
          width={140}
          height={150}
          alt="linear demo image"
           className="absolute right-5 bottom-5  object-contain rounded-2xl transform "
        />
      </WobbleCard>
    </div>
  );
}
