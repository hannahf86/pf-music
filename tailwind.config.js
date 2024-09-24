/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        black: "#263236",
        accent: "#34718B",
        button: "#345461",
        background: "#F6FBFB",
        success: "#00AB41",
        error: "#D1001F",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["Parisienne", "handwriting"],
      },
      fontSize: {
        sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
        md: ["clamp(1.1rem, calc(0.94rem + 0.6vw), 1.30rem)", "1.5"],
        base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
        lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 8.15rem)", "1"],
        "7xl": ["clamp(3.5rem, calc(0.78rem + 9.5vw), 9.5rem)", "1"],
        "8xl": ["clamp(5rem, calc(0.78rem + 11vw), 11rem)", "1"],
      },
    },
  },
  plugins: [],
};
