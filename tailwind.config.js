/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "sky-blue": "#007FFF",
        "midnight-blue": "#17224D",
        "almost-black": "#292929",
        "off-white": "#F5FAFA",
        "dark-grey": "#515151",
        "cta-orange": "#FF960C",
        "light-grey": "#D4D2E3",
        "socials-grey": "#E7E6F2",
      },
    },
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      22: "88px",
      31: "124px",
      53: "212px",
    },
  },
  plugins: [],
};
