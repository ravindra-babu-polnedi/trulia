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
      backgroundImage: theme => ({
        'mobile-bg': "url('/hiDpiSmall.webp')",
        'tablet-bg': "url('/hiDpiLarge.webp')",
        'desktop-bg': "url('/hiDpiExtraLarge.webp')",
      }),
      fontFamily: {
        trulia: ['TruliaSans', 'Trulia-Fallback', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
