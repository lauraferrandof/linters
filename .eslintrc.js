module.exports = {
	parser: '@babel/eslint-parser',
	env: {
		browser: true,
		node: true
	},
	extends: ['airbnb', 'plugin:prettier/recommended'],
	plugins: ['import', 'jsx-a11y', 'react', 'react-hooks']
};
