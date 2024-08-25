/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
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
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Public", "sans-serif"],
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
    extend: {},
  },
  plugins: [],
};
