/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        acad: ["Afacad", "sans-serif"],
        karantina: ["var(--font-karantina)"],
        kadwa: ["var(--font-kadwa)"],
      },
    },
  },
  safelist: ["font-acad"],
  plugins: [],
};
