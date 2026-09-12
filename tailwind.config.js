/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Patriotic brand palette: navy blue / flag red / white
        navy: {
          DEFAULT: '#0B2447',
          dark: '#071A34',
          light: '#173A6B',
        },
        flag: {
          DEFAULT: '#C81E1E',
          dark: '#9E1414',
          light: '#E23B3B',
        },
        gold: '#F5A623',
      },
      boxShadow: {
        cta: '0 8px 24px -6px rgba(200, 30, 30, 0.5)',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
