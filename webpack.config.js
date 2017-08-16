const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        entryA: './entryA.js',
        entryB: './entryB.js'
    },
    output: {
        filename: `[name].js`,
        chunkFilename: '[name].js'
    },
    resolve: {
        modules: ['node_modules'],
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                importLoaders: 1
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        contentBase: './'
    }
};
