/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "mid-white": "#f8f9fd",
        "navi-gray": "#707991",
        "light-gray": "#F5F5F5",
        "mid-gray": "#F1F1F1",
        "rich-black": "#011627",
        "light-green": "#78E378",
        "iceburg-blue": "#615EF0"
      }
    },
  },
  plugins: [],
}
