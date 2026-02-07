/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bce1bc',
          300: '#8fcc8f',
          400: '#5cb05c',
          500: '#3d943d',
          600: '#2f7a2f',
          700: '#286128',
          800: '#244f24',
          900: '#1f411f',
        },
      },
    },
  },
  plugins: [],
}