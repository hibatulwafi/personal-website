/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js}',
    './src/assets/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: { 100: '#FEEBC8', 500: '#fbbe45', 900: '#7B341E' },
        peach: { 100: '#FFDCE0', 500: '#EB6A81', 900: '#531920' },
        emerald: { 100: '#E6F2EE', 500: '#235547', 900: '#0A1A15' },
        black: { 100: '#E2E4E3', 500: '#09100E', 900: '#010302' },
        darkChocolate: { 100: '#EEE9E9', 500: '#190D0F', 900: '#080304' },
      },
    },
  },
  plugins: [],
};
