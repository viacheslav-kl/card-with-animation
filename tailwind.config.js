/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js}'],
	theme: {
		extend: {
			minWidth: {
				card: '315px',
			},
			maxWidth: {
				card: '440px',
			},
			height: {
				card: '380px',
				'card-top': '222px',
				'bottom-before-hover': '158px',
				'bottom-after-hover': '286px',
			},
			boxShadow: {
				first: '0px 2px 6px 2px #00000026',
				second: '0px 1px 2px 0px #0000004D',
			},
			fontSize: {
				mainBtn: '15px',
			},
		},

		fontFamily: {
			sans: ['Inter'],
		},
	},
	plugins: [],
}
