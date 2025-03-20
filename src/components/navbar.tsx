"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { HomeIcon,MessageCircle,User2Icon } from "lucide-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User2Icon className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "FAQ",
      link: "/FAQ",
      icon: (
        <MessageCircle className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Security",
      link: "/contact",
      icon: (
        <MessageCircle className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Suggetion",
      link: "/suggestion",
      icon: (
        <MessageCircle className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
