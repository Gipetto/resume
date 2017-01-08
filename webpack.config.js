let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let PROD = (process.env.NODE_ENV === 'production');

let enabledPlugins = [
	new ExtractTextPlugin('resume.css'),
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
	enabledPlugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: PROD ? false : {warnings: false},
		minimize: PROD
	}))
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
	historyApiFallback: {
		index: 'index.html',
	},
	devServer: {
		outputPath: path.join(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [
						'es2015',
						'react'
					]
				}
			},
			{
				test: /\.scss/,
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.(eot|woff|woff2|ttf)$/,
				loader: 'file?name=app/generated/[name].[ext]'
			}
		]
	},
	plugins: enabledPlugins
};
