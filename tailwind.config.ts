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
        'loose': '6rem',
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
      keyframes: {
        flipUp: {
          '0%': { opacity: '0', transform: 'rotateX(-120deg)' },
          '100%': { opacity: '1', transform: 'rotateX(0)' },
        },

        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-90px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-100px) ' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        fadeRightToLeft: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        zoomInUp: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(120px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },

        fadeDownRight: {
          '0%': { opacity: '0', transform: 'translateY(-80px) translateX(-80px)' },
          '100%': { opacity: '1', transform: 'translateY(0) translateX(0)' },
        },

        fadeDownLeft: {
          '0%': { opacity: '0', transform: 'translateY(-80px) translateX(80px)' },  // Start from top-right
          '100%': { opacity: '1', transform: 'translateY(0) translateX(0)' },         // End at normal position
        },

        fadeLeftToRight: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        flipUp: 'flipUp 1s ease-out forwards',
        fadeDown: 'fadeDown 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeRight: 'fadeRight 1s ease-out forwards',
        fadeRightToLeft: 'fadeRightToLeft 1s ease-out forwards',
        fadeLeftToRight: 'fadeLeftToRight 1s ease-out forwards',
        fadeInTop: 'fadeInTop 1s ease-out forwards',
        fadeInBottom: 'fadeInBottom 1s ease-out forwards',
        zoomInUp: 'zoomInUp 1s ease-out forwards',
        fadeDownRight: 'fadeDownRight 1s ease-out forwards',
        fadeDownLeft: 'fadeDownLeft 1s ease-out forwards',
        jump: 'jump 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
