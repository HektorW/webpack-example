
// var webpack = require('webpack');

module.exports = {
	context: __dirname, // Viktigt, annars sätts cwd som node_modules

	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},



	/* Loaders */
	module: {
		loaders: [
			// { test: /\.css$/, loader: 'style!css' },
			// { test: /\.html$/, loader: 'html' },
			// { test: /\.(png|jpg)$/, loader: 'url-loader' }
		]
	},



	/* Multiple */
	// entry: {
	// 	bundle: './src/main.js',
	// 	unicornbundle: './src/unicornmain.js'
	// },
	// output: {
	// 	path: './dist',
	// 	filename: '[name].js'
	// },
	// plugins: [
	// 	new webpack.optimize.CommonsChunkPlugin('common.js')
	// ]
};
