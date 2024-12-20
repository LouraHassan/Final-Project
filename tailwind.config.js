/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Karla'],
      'text' :  ['Karla']
    },
  },
  plugins: [
    require('daisyui'),
    
  ],
  daisyui: {
    themes: [  {
      mytheme: {
        
"primary": "#ECECEC",
        
"primary-content": "#222831",
        
"secondary": "#30475E",
        
"secondary-content": "#ececec",
        
"accent": "#F2A365",
        
"accent-content": "#ececec",
        
"neutral": "#222831",
        
"neutral-content": "#cecfd2",
        
"base-100": "#ECECEC",
        
"base-200": "#e4e4e4",
        
"base-300": "#afafaf",
        
"base-content": "#131313",
        
"info": "#60a5fa",
        
"info-content": "#ececec",
        
"success": "#16a34a",
        
"success-content": "#ececec",
        
"warning": "#fbbf24",
        
"warning-content": "#ececec",
        
"error": "#97011B",
        
"error-content": "#ececec",
        },
      },, "dark", "cmyk"],
  },
}
