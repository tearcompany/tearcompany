"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import GlitchedBackground from "@/components/glitched-background";

export default function HeroSection() {
  const [subtitles] = useState([
    "Whispering gates",
    "Sacred frequencies",
    "Ethereal whispers",
    "Divine resonance",
    "Mystic vibrations",
    "Celestial harmony",
    "Ancient echoes",
    "Spiritual currents",
    "Cosmic melodies",
    "Transcendent waves",
  ]);
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 400);
    const changeIndexTimeout = setTimeout(() => {
      setIdx(() => Math.floor(Math.random() * subtitles.length));
      setFade(true);
    }, 500);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeIndexTimeout);
    };
  }, [idx, subtitles.length]);

  return (
    <>
      <section
        className="relative font-poetic max-w-5xl mx-auto py-24 px-8 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-[48px] shadow-[0_8px_64px_-16px_rgba(166,140,80,0.32)] border-2 border-gold-300/30 overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          boxShadow: "0 12px 64px -12px #bfa97460",
          backgroundImage: "url(/logo.png)",
          backgroundSize: "cover",
          borderImage:
            "linear-gradient(90deg, #bfa974, #ffe9b2 50%, #cfc48c) 1",
        }}
      >
        {/* Golden wavy ornament SVG at top */}
        <svg
          className="absolute left-0 top-0 w-full h-10 pointer-events-none"
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.85 }}
          aria-hidden="true"
        >
          <path
            d="M0 20 Q 180 0 360 20 T 720 20 T 1080 20 T 1440 20 V40 H0Z"
            fill="url(#gold-gradient)"
          />
          <defs>
            <linearGradient
              id="gold-gradient"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#bfa974" />
              <stop offset="0.5" stopColor="#ffe9b2" />
              <stop offset="1" stopColor="#cfc48c" />
            </linearGradient>
          </defs>
        </svg>

        {/* ARGON. presents */}
        <p className="text-2xl font-manuscript font-light mb-2 text-onyx/60 tracking-wide">
          ARGON. presents
        </p>

        {/* Selah. as seal */}
        <p
          className="font-poetic text-4xl text-gold-700 tracking-wider mb-6 burn-in"
          style={{
            textShadow: "0 0 8px #fff7b2, 0 0 32px #e5c779",
            mixBlendMode: "lighten",
          }}
        >
          Selah.
        </p>

        {/* TEAR COMPANY logo */}
        <h1
          className="burn-in text-8xl font-poetic font-extrabold uppercase tracking-widest text-gold-700 mb-8"
          style={{
            textShadow: "0 0 8px #fff7b2, 0 0 32px #f9e07f, 0 0 2px #e5c779",
            mixBlendMode: "lighten",
          }}
        >
          TEAR COMPANY
        </h1>

        {/* Subtitle */}
        <p className="text-3xl font-manuscript font-light mb-8 text-onyx/80 tracking-wide">
          Not code. Not ritual. Presence.
        </p>

        {/* Fading subtitle */}
        <div className="h-14 mb-8 flex items-center justify-center">
          <GlitchedBackground intensity="low" color="digital">
            <p
              className="text-2xl font-mono px-6 py-2 rounded-xl border border-gold-300/60 bg-white/60 shadow-md tracking-wide"
              style={{
                background: "linear-gradient(90deg, #fffbe6 90%, #fdf6c5 100%)",
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundImage:
                  "linear-gradient(90deg, #bfa974 0%, #ffe9b2 80%, #cfc48c 100%)",
                WebkitTextFillColor: "transparent",
                textShadow: "0 1px 8px #fff7b2, 0 0 32px #e5c779",
                fontWeight: 500,
                opacity: fade ? 1 : 0,
                transition: "opacity 0.4s cubic-bezier(.4,1.3,.5,1.1)",
              }}
            >
              {subtitles[idx]}
            </p>
          </GlitchedBackground>
        </div>

        <style jsx global>{`
          @keyframes burn-in {
            0% {
              opacity: 0;
              filter: blur(8px);
              transform: scale(1.02) translateY(12px);
            }
            60% {
              opacity: 1;
              filter: blur(0px);
              transform: scale(1) translateY(0px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: scale(1) translateY(0px);
            }
          }
          .burn-in {
            animation: burn-in 1.2s cubic-bezier(0.62, 0.01, 0.18, 1.01);
          }
          @keyframes cursor-blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </section>
    </>
  );
}
