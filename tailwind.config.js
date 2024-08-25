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
        blob: "blob 10s infinite",
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      keyframes: {
        "loop-scroll": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, -40px) scale(1.05)",
          },
          "66%": {
            transform: "translate(-40px, 50px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
