const webpack = require("webpack");
const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "assets/styles/core.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    context: srcPath,
    entry: [
        'webpack-hot-middleware/client?reload=true&',
        path.join(srcPath, 'js', 'index.js'),
    ],
    devtool: 'source-map',
    output: {
        path: buildPath,
        filename: "assets/js/bundle.js"
    },
    plugins: [
        extractSass,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=[name].[ext]&publicPath=../../&outputPath=assets/fonts/'
            },
            {
                test: /\.json$/,
                loader: 'file-loader?name=config.json&outputPath=data/'
            },
            {
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]&outputPath=assets/images/'
            }
        ]
    }
};