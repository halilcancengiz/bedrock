/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#262626",
        "secondary": "#F4F3EF",
        "t-primary": "#222222",
        "t-secondary": "#222222",
        "custom-yellow": "#D1FA5E",
        
      },
      screens: {
        'xs': '480px', //488 olacak
        'sm': '640px',
        'md': '768px',
        'lg': '992px', //animasyonlar devreye giriyor
        'hxl': '1192px',
        'hxxl': '1220px',
        'xl': '1280px', //animasyonlar devreye giriyor
        '2xl': '1537px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}