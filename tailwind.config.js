/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        'thin': '0.2px',
      },
      borderColor: {
        'custom-gray': '#CCCDCC',
        'custom-dark': '#E5E7E4',
      },
      boxShadow: {
        'custom-light': '0px 8px 15px 0px #1414141F',
        'custom-dark' : '0px 0px 4px 0px #1414141F',
      }
    },
  },
  plugins: [],
};
