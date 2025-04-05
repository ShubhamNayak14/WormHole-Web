"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

// Dynamically import the icon with SSR disabled
const FileSearch2 = dynamic(() =>
  import("lucide-react").then((mod) => mod.FileSearch2),
  { ssr: false }
);

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:to-[#1a1a1a] p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
            <FileSearch2 className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          404 - Page Not Found
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link href="/">Go Home</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
