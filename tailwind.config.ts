import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        volkhov: ['Volkhov', 'serif'],
        poppins: ['Poppins']
      },
      lineHeight: {
        'extra-loose': '8.4rem',
        'loose': '5.4rem',
        'large-loose': '7rem',
        'large': '3.4rem'
      },
      borderRadius: {
        default: '0.25rem',
        large: '8rem'
      },
      screens: {
        'desktop': '1920px'
      },
    },
  },
  plugins: [],
};
export default config;
