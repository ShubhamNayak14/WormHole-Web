"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Github } from "lucide-react";

export function LinkPreviewDemo() {
  return (
    <div className="flex items-center justify-center w-full flex-col px-4 py-8 md:py-16 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Heading */}
      <h2 className="bg-clip-text text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight">
        File Sharing reimagined - secure and <br className="hidden sm:block" />
        <LinkPreview
          url="https://www.kaspersky.com/resource-center/definitions/what-is-a-digital-footprint"
          className="font-extrabold lg:text-5xl text-blue-500 dark:text-blue-600"
        >
          <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          footprint
             </span>
        </LinkPreview>{" "}
        free with{" "}
        <LinkPreview
          url="https://magic-wormhole.readthedocs.io/en/latest/welcome.html#"
          className="text-5xl  bg-clip-text text-transparent font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
         <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">  Magic Wormhole  </span>
        </LinkPreview>
      </h2>

      {/* Description */}
      <div className="max-w-xl mx-auto mt-6 text-sm sm:text-base md:text-lg font-medium text-neutral-700 dark:text-neutral-300 text-center transition-colors duration-300">
        Securely transfer files and folders between computers, like magic. No
        sign up, no setup, just instant secure sharing.
      </div>

      {/* GitHub Link */}
      <div className="max-w-xl mx-auto mt-6 sm:mt-10 text-sm sm:text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 text-center flex items-center justify-center gap-2 transition-colors duration-300">
        <LinkPreview url="https://github.com/magic-wormhole/magic-wormhole">
          <div className="flex items-center justify-center gap-2">
            <Github className="text-gray-800 dark:text-blue-500" size={24} />
            <span>Github</span>
          </div>
        </LinkPreview>
      </div>
    </div>
  );
}
