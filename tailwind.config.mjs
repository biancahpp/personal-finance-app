/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Public", "sans-serif"],
    },
    extend: {
      colors: {
        beige: {
          100: "#F8F4F0",
          500: "#98908B",
        },
        grey: {
          900: "#201F24",
          500: "#696868",
          300: "#B3B3B3",
          100: "#F2F2F2",
        },
        secondary: {
          green: "#277C78",
          yellow: "#F2CDAC",
          cyan: "#82C9D7",
          navy: "#626070",
          red: "#C94736",
          purple: "#826CB0",
        },
        other: {
          purple: "#AF81BA",
          turquoise: "#597C7C",
          brown: "#93674F",
          magenta: "#934F6F",
          blue: "#3F82B2",
          "navy-grey": "#97A0AC",
          "army-green": "#7F9161",
          gold: "#CAB361",
          orange: "#BE6C49",
        },
      },
      screens: {
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "28px",
      },
      spacing: {
        500: "40px",
        400: "32px",
        300: "24px",
        250: "20px",
        200: "16px",
        150: "12px",
        100: "8px",
        50: "4px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        // Text presets
        ".text-preset-1": {
          "@apply font-bold text-[32px] leading-[120%] tracking-normal": {},
        },
        ".text-preset-2": {
          "@apply font-bold text-[20px] leading-[120%] tracking-normal": {},
        },
        ".text-preset-3": {
          "@apply font-bold text-[16px] leading-[150%] tracking-normal": {},
        },
        ".text-preset-4": {
          "@apply text-[14px] leading-[150%] tracking-normal": {},
        },
        ".text-preset-4-bold": {
          "@apply font-bold text-[14px] leading-[150%] tracking-normal": {},
        },
        ".text-preset-5": {
          "@apply text-[12px] leading-[150%] tracking-normal": {},
        },
        ".text-preset-5-bold": {
          "@apply font-bold text-[12px] leading-[150%] tracking-normal": {},
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
