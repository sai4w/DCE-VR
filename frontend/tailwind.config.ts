import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#081A1A",
        whiteR: "#F7F8F3",
        primary: "#2DAD82",
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
        ring: {
          "5%, 45%": { transform: "rotate3d(0, 0, 1, -10deg)" },
          "10%, 40%": { transform: "rotate3d(0, 0, 1, 10deg)" },
          "15%, 25%, 35%": { transform: "rotate3d(0, 0, 1, -10deg)" },
          "20%, 30%": { transform: "rotate3d(0, 0, 1, 10deg)" },
          "51%, 100%": { transform: "rotate3d(0, 0, 0, 0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-vari": "spin 1.5s cubic-bezier(.8,.44,.51,.73) infinite",
        "ping-vari": "ping 3s cubic-bezier(.8,.44,.51,.73) infinite",
        ring: "ring 1s ease-in-out infinite",
      },
      fontFamily: {
        integral: "integral",
        cairo: "cairo",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({
      nocompatible: "true",
      preferredStrategy: "pseudoelements",
    }),
  ],
} satisfies Config;
