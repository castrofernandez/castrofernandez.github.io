const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [path.resolve(__dirname, 'src/images')],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(svg)$/,
                exclude: [path.resolve(__dirname, 'src/fonts')],
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            noquotes: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8000,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'juancastro.es',
            favicon: './src/images/favicon/favicon-32x32.png',
            inject: false,
            template: require('html-webpack-template'),
            headHtmlSnippet:
                '<meta name="viewport" content="width=device-width, initial-scale=1">',
            bodyHtmlSnippet: '<main class="main" id="app"></main>'
        })
    ]
});
