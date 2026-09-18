import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // A closed set. If a value is not here, a component cannot use it.
    extend: {
      colors: {
        canvas: "#FBFBF9",
        surface: "#FFFFFF",
        sunken: "#F4F4F1",
        line: { DEFAULT: "#E6E6E1", strong: "#D2D2CB" },
        ink: { DEFAULT: "#191A17", 2: "#4A4C46", 3: "#6B6D65" },
        green: {
          DEFAULT: "#2F6B4F",
          50: "#F1F7F3",
          100: "#E4EEE8",
          600: "#2A5F44",
          700: "#1E4A36",
        },
        clay: { DEFAULT: "#8A5A3B", 100: "#F6EFE8" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        24: "96px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      maxWidth: {
        form: "400px",
      },
      transitionTimingFunction: {
        nura: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
