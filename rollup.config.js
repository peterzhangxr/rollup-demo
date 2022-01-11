export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'umd', // amd es6 iife cjs umd
		name: 'bundleName'
	}
}