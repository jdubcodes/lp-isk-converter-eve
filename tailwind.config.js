/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: {
        1: 'rgba(0, 1, 18, 1)',
        2: 'rgba(32, 33, 44, 1)',
      },
      pri: {
        1: 'rgba(43, 44, 55, 1)',
        2: 'rgba(62, 63, 78, 1)',
      },
      light: {
        1: 'rgba(130, 143, 163, 1)',
        2: 'rgba(228, 235, 250, 1)',
      },
      white: {
        1: 'rgba(255, 255, 255, 1)',
        2: 'rgba(244, 247, 253, 1)',
      },
      black: '#000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
