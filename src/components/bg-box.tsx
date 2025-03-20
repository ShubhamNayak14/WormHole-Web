import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmoothDemo } from "./type";


export function Bgbox() {
  return (
    <>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
      <h2 className="bg-clip-text  text-center bg-white  text-2xl md:text-4xl lg:text-3xl font-sans py-2 md:py-10 relative z-20  tracking-tight">
        <TypewriterEffectSmoothDemo/>
      </h2>
    </BackgroundLines>

    </>

  );
}
