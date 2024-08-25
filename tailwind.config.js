/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientbg': "url('/4.png')",
      },
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
        fadeslow: "fade-in-slow 2s ease-in-out forwards",
        fade: "fade-in 4s ease-in-out forwards",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      keyframes: {
        "fade-in-slow": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "50%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "loop-scroll": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
