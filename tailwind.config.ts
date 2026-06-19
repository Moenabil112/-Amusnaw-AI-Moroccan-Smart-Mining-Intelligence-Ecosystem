import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Institutional base palette
        graphite: {
          DEFAULT: "#14171c",
          50: "#f5f6f7",
          100: "#e2e4e7",
          200: "#c5c9cf",
          300: "#9aa0aa",
          400: "#6b7280",
          500: "#454b54",
          600: "#2f343b",
          700: "#23272d",
          800: "#181b20",
          900: "#0d0f12",
          950: "#08090b",
        },
        gold: {
          DEFAULT: "#c8a45c",
          soft: "#d9bd84",
          deep: "#a07d3a",
        },
        teal: {
          DEFAULT: "#1f8a7d",
          deep: "#0f5c54",
          bright: "#2bb3a3",
        },
        copper: {
          DEFAULT: "#b06a3c",
          warm: "#c98a5a",
          deep: "#7a4527",
        },
        ivory: "#f4f1e9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        window: "0 24px 80px -20px rgba(0,0,0,0.65), 0 2px 0 0 rgba(255,255,255,0.04) inset",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 0 40px -8px var(--win-glow, rgba(200,164,92,0.35))",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
