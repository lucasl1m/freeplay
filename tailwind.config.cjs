/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			fontSize: {
				xs: 14,
				sm: 16,
				md: 18,
				lg: 20,
				xl: 24,
				'2xl': 32,
                '3xl': 48,
                '4xl': 64,
			},

			colors: {
				background: '#171B1F',
				white: '#FFFFFF',

				blue: {
					500: '#1991EB',
					700: '#21699F',
				},

				gray: {
					500: '#8D8D8D',
					800: '#252B33',
				},
			},

			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
