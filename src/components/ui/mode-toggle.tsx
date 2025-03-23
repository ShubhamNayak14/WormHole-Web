"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-500 hover:scale-110 hover:shadow-md dark:hover:shadow-lg"
    >
      <Sun className="absolute h-6 w-6 text-yellow-500 transition-all duration-500 dark:opacity-0 dark:scale-0" />
      <Moon className="absolute h-6 w-6 text-gray-300 opacity-0 scale-0 transition-all duration-500 dark:opacity-100 dark:scale-100" />
    </Button>
  )
}
