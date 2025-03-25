"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const [visible, setVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Listen for screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: isSmallScreen ? 100 : -100, // Animate from bottom on small screens
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: isSmallScreen ? 100 : -100,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className={cn(
            "flex w-fit fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border-b shadow-lg z-[5000] pr-4 pl-6 py-2 items-center justify-center space-x-4",
            isSmallScreen ? "bottom-10" : "top-10" // Switch position based on screen size
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <Link href={"/contact"}>
            <button className="border text-sm  cursor-pointer font-medium relative bg-blue-500  border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full ">
              <span>Contact Us</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px  h-px" />
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};