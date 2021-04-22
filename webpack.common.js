const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './dist'),
		assetModuleFilename: 'images/[name][ext]',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-transform-runtime']
					}
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /(node_modules)/,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html')
		})
	]
};
