/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark blue-slate base
        steel: {
          DEFAULT: '#152C4A', // headers, hero, dark sections
          dark: '#0A1626', // footer, text on orange CTAs
          light: '#25456B', // lighter panels / hover
        },
        // High-visibility emergency orange — every primary CTA
        safety: {
          DEFAULT: '#F97316', // CTA background (pair with text-steel-dark)
          dark: '#E0620A', // CTA hover
          deep: '#C2410C', // orange text/icons on light backgrounds (AA on white)
          light: '#FDBA74',
        },
        gold: '#FBBF24', // review stars
      },
      boxShadow: {
        cta: '0 8px 24px -6px rgba(249, 115, 22, 0.5)',
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
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
