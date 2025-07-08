"use client";

import React, { ReactNode } from "react";

interface GlitchedBackgroundProps {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  color?: "red" | "blue" | "green" | "purple" | "rainbow" | "digital";
  className?: string;
}

export default function GlitchedBackground({
  children,
  intensity = "medium",
  color = "digital",
  className = "",
}: GlitchedBackgroundProps) {
  const intensityClasses = {
    low: "glitch-intensity-low",
    medium: "glitch-intensity-medium",
    high: "glitch-intensity-high",
  };

  const colorClasses = {
    red: "glitch-color-red",
    blue: "glitch-color-blue",
    green: "glitch-color-green",
    purple: "glitch-color-purple",
    rainbow: "glitch-color-rainbow",
    digital: "glitch-color-digital",
  };

  return (
    <div
      className={`glitched-background ${intensityClasses[intensity]} ${colorClasses[color]} ${className}`}
    >
      <div className="glitch-layer glitch-layer-1">{children}</div>
      <div className="glitch-layer glitch-layer-2">{children}</div>
      <div className="glitch-layer glitch-layer-3">{children}</div>
      <div className="glitch-content">{children}</div>
    </div>
  );
}
