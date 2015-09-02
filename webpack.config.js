
module.exports = {
	context: __dirname, // Viktigt, annars sätts cwd som node_modules

	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	}
};
