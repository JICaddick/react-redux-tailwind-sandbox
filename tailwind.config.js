/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'dark-cyan': 'hsl(158, 36%, 37%)',
					cream: 'hsl(30, 38%, 92%)',
				},
				neutral: {
					'very-dark-blue': 'hsl(212, 21%, 14%)',
					'dark-grayish-blue': 'hsl(228, 12%, 48%)',
				},
			},
		},
		fontSize: {
			'xs': '.75rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
			'6xl': '5.5rem',
		},
	},

	plugins: [],
};
