import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "@/components/navbar";
import ThemeToggle from "@/components/ui/theme";
import {WormholeLogo} from "@/components/logo";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App",
  description: "New",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        {/* <nav className="w-full sticky top-0 flex justify-between px-4 py-6 z-10 bg-slate-800">App</nav> */}
        <div className="fixed top-7 right-4 z-50">
          <ThemeToggle />
        </div>
        <div className="fixed top-7 left-5 z-50 ">
          <WormholeLogo />
        </div>

        <FloatingNavDemo />
        {children}
      </body>
    </html>
  );
}
