/** @type {import('tailwindcss').Config} */
module.exports = {
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
      letterSpacing: {
        'custom-150': '0.15em',
      },
      fontSize: {
        '10px': '10px', 
      },
      fontFamily: {
        'lato-black': ['lato-black', 'sans-serif'],
        'lato-blackItalic': ['lato-blackItalic', 'sans-serif'],
        'lato-bold': ['lato-bold', 'sans-serif'],
        'lato-boldItalic': ['lato-boldItalic', 'sans-serif'],
        'lato-italic': ['lato-italic', 'sans-serif'],
        'lato-light': ['lato-light', 'sans-serif'],
        'lato-lightItalic': ['lato-lightItalic', 'sans-serif'],
        'lato-regular': ['lato-regular', 'sans-serif'],
        'lato-thin': ['lato-thin', 'sans-serif'],
        'lato-thinItalic': ['lato-thinItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
