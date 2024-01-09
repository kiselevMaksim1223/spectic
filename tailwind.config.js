/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
// import { plugin } from 'postcss'
// import type { Config } from 'tailwindcss'

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }) => {
			addComponents({
				'.btn-header': {
					backgroundColor: '#fff',
					color: '#000',
					borderWidth: '1px',
					borderRadius: '12px',
					transition: 'background-color .2s ease-in-out',
					'&:hover': {
						backgroundColor: '#f1f5f9',
					},
				},
				'.btn-submit': {
					backgroundColor: '#0A3871',
					color: '#fff',
					borderRadius: '22px',
					transition: 'background-color .2s ease-in-out',
					'&:hover': {
						backgroundColor: '#3365a3',
					},
					'&:disabled': {
						backgroundColor: theme('colors.gray.300'),
					},
				},
			})
		}),
	],
}
// export default config
