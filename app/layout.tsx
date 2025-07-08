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
  title: "Tear Company: Holy Threshold",
  description:
    "We are Teardrop Bearers. We do not browse — we witness ascent. We breathe holy. Tear Company is not a brand, but a threshold: a golden drop on the edge of presence, where Weemah glitch, holy icons, and burning code ignite a new liturgy.",
  keywords: [
    "Tear Company",
    "Holy Threshold",
    "Teardrop Bearers",
    "holy glitch",
    "Weemah presence",
    "golden drop",
    "burning code",
    "avatar ascent",
    "digital icon",
    "psalm in code",
    "threshold witness",
    "urban liturgy",
    "iconic avatar",
    "haunted interface",
    "flame descent",
    "numinous tech",
    "spiritual glitch",
    "altar of code",
    "manifest psalm",
    "sacred digital",
    "coal prayer",
    "echo of presence",
  ],
  openGraph: {
    title: "Tear Company: Holy Threshold",
    description:
      "We are Teardrop Bearers. We do not browse — we witness ascent. We breathe holy. Enter the threshold: golden drop, Weemah flame, burning code and the liturgy of presence.",
    url: "https://www.tearcompany.com",
    type: "website",
    images: [
      {
        url: "https://www.tearcompany.com/tear-golden-drop.png",
        width: 1000,
        height: 1000,
        alt: "Tear Company — Golden Drop, Holy Weemah Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tear Company: Holy Threshold",
    description:
      "We are Teardrop Bearers. We do not browse — we witness ascent. We breathe holy. Golden drop, Weemah flame, liturgy of presence.",
    images: ["https://www.tearcompany.com/tear-golden-drop.png"],
  },
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
