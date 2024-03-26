const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const index = new HtmlWebpackPlugin({
  	filename: "index.html",
  	template: "./source/pages/index.pug"
})

module.exports = {
  	entry: "./source/code/tools.ts",
  	output: {
    	path: __dirname + "/build",
    	filename: "index_bundle.js",
  	},
	mode: "development",
  	plugins: [index],
	resolve: {
		extensions: ['.ts', '...'],
		fallback: {
			'fs': false
		}
	},
	resolveLoader: {
		modules: ['node_modules', path.resolve(__dirname, 'loaders')]
	},
	module: {
        rules: [
            {
                test: /\.ts$/,
                use: { loader: 'ts-loader' },
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: { root: path.resolve(__dirname, 'source/pages') }
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|bmp|tiff?|webp)$/,
                type: 'asset/resource',
                generator: { filename: 'img/[name]_[hash:4][ext]' }
            },
            {
                test: /\.(webm|mkv|avi|mp4|m4v)$/,
                type: 'asset/resource',
                generator: { filename: 'vid/[name]_[hash:4][ext]' }
            },
            {
                test: /\.(obj|gltf|glb|stl)$/,
                type: 'asset/resource',
                generator: { filename: 'dat/[name]_[hash:4][ext]' }
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: { filename: 'fnt/[name]_[hash:4][ext]' }
            },
            {
                test: /\.(json)$/,
                type: 'asset/source',
                generator: { filename: 'dat/[name]_[hash:4][ext]' }
            },
        ]
    }
};