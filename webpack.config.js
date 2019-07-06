let path = require('path');
let webpack = require('webpack');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let PROD = (process.env.NODE_ENV === 'production');

let enabledPlugins = [
	new MiniCssExtractPlugin({
		filename: 'resume.css'
	}),
	new CopyWebpackPlugin([
		{
			from: __dirname + '/index.html',
			to: __dirname + '/index.html',
		}
	]),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(PROD ? 'production' : 'development')
		}
	})
];

if (PROD) {
	enabledPlugins.push(new UglifyJsPlugin({
		uglifyOptions: {
			compress: PROD ? true : {warnings: false},
			minimize: PROD	
		}
	}));
}

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [
		'./src/main.js',
		'./src/styles/resume.scss'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: 'resume.js'
	},
	devServer: {
		contentBase: path.join(__dirname),
		port: 8081
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							sourceType: "unambiguous",
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							]
						}	
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.json$/,
				use: ['json']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							optipng: {
								optimizationLevel: 7
							},
							gifsicle: {
								interlaced: false
							}
						}
					}
				]
			},
			{
				test: /\.(eot|woff|woff2|ttf)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: enabledPlugins
};
