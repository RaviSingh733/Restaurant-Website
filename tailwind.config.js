/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7EA',
        saffron: '#E79A22',
        maroon: '#7A1F2B',
        spice: '#5B3824',
        gold: '#C99A2E',
        almond: '#F7E4C6'
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 55px rgba(91, 56, 36, 0.12)',
        gold: '0 16px 35px rgba(201, 154, 46, 0.18)'
      }
    }
  },
  plugins: []
};
