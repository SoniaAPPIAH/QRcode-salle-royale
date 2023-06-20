const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.jpg$|.jpeg$|.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets",
                        esModule: false
                    }
                }
            },
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".*",".js",".jsx", ".jpg", ".svg"]
    },
};