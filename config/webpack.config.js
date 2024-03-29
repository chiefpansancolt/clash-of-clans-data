const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, '../dist/umd'),
		filename: 'index.js',
		library: 'exampleTypescriptPackage',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[contenthash].[ext]',
							outputPath: 'images',
						},
					},
				],
			},
			{
				test: /\.ts(x*)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: 'config/tsconfig.umd.json',
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx'],
		plugins: [new TsconfigPathsPlugin()],
	},
}
