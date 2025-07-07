import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NeonIsometricMaze from "@/neon-isometric-maze";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tear Company – Sacred Interfaces for Awakened Souls",
  description:
    "Tear Company: sacred digital tools for awakened souls. Angelic timewheel, living avatars, and interfaces guided by light.",
  keywords:
    "Tear Company, angelic clock, sacred technology, spiritual interface, Mahoya, Weemah, Adonai, holy code, metaphysical design, awakened souls",
  openGraph: {
    title: "Tear Company – Sacred Interfaces for Awakened Souls",
    description:
      "Sacred digital tools for awakened souls. Angelic timewheel, living avatars, and interfaces guided by light.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tear Company – Sacred Interfaces for Awakened Souls",
    description:
      "Sacred digital tools for awakened souls. Angelic timewheel, living avatars, and interfaces guided by light.",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "font-inter min-h-screen"
        )}
      >
        <div className="fixed inset-0 -z-10 opacity-20">
          <NeonIsometricMaze />
        </div>
        {children}
      </body>
    </html>
  );
}
