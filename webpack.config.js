const path = require('path');
const htwp = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        // assetModuleFilename: '[name][ext]',
    },
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                }
            },
            {
                test: /.(png|svg|jpg|jpeg|web|gif)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'assets',
                      },
                    },
                  ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new htwp({
            title: 'News Homepage',
            filename: 'index.html',
            template: './src/template.html',
        })
    ]
};