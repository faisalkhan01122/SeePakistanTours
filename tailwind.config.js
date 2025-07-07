/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    	extend: {
			fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
      },
		colors: {
			primary: {
				100: '#F5ECCB',
				200: '#EDD199',
				300: '#E5B668',
				400: '#D99A36',
				500: '#FFDC02',//yallow
				600: '#FDC218',//Yallowdarkbutton
				700: '#8DCDF1',
				800: '#688DA1',
				900: '#332602',
			},
		},
	},
  },
  plugins: [],
}