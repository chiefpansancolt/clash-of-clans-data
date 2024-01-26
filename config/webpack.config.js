const path = require('path')

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
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@IBuilderBase': path.resolve(__dirname, 'src/interfaces/builderBase'),
			'@IClanCapital': path.resolve(__dirname, 'src/interfaces/clanCapital'),
			'@IHomeVillage': path.resolve(__dirname, 'src/interfaces/homeVillage'),
			'@ICommon': path.resolve(__dirname, 'src/interfaces/common'),
			'@BuilderBase': path.resolve(__dirname, 'src/builderBase'),
			'@ClanCapital': path.resolve(__dirname, 'src/clanCapital'),
			'@HomeVillage': path.resolve(__dirname, 'src/homeVillage'),
		},
		extensions: ['.ts', '.js', '.tsx', '.jsx'],
	},
}
