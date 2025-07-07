import type { Config } from "tailwindcss"

const shadcnDefaultConfig = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "living-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-3px) rotate(0.4deg)" },
          "50%": { transform: "translateY(1px) rotate(-0.2deg)" },
          "75%": { transform: "translateY(-3px) rotate(0.4deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "living-float": "living-float 7s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

const config: Config = {
  ...shadcnDefaultConfig,
  content: [...shadcnDefaultConfig.content],
  theme: {
    ...shadcnDefaultConfig.theme,
    extend: {
      ...shadcnDefaultConfig.theme.extend,
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        ...shadcnDefaultConfig.theme.extend.colors,
        // Modern spiritual palette
        "holy-white": "#FFFFFF",
        "divine-blue": "#3B82F6",
        "sacred-gold": "#F59E0B",
        "pure-light": "#F8FAFC",
        "heaven-blue": "#EFF6FF",
        "golden-glow": "#FEF3C7",
        "spirit-gray": "#64748B",
        "angel-silver": "#E2E8F0",
      },
      backgroundImage: {
        ...(shadcnDefaultConfig.theme.extend.backgroundImage || {}),
        "holy-gradient": "linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 50%, #F8FAFC 100%)",
        "divine-shimmer": "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)",
        "sacred-glow": "radial-gradient(circle at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
      },
      boxShadow: {
        ...(shadcnDefaultConfig.theme.extend.boxShadow || {}),
        holy: "0 4px 20px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)",
        divine: "0 8px 32px rgba(59, 130, 246, 0.15), 0 4px 16px rgba(245, 158, 11, 0.1)",
        sacred: "0 12px 40px rgba(59, 130, 246, 0.2), 0 6px 20px rgba(245, 158, 11, 0.15)",
      },
    },
  },
  plugins: [...shadcnDefaultConfig.plugins],
}
export default config
