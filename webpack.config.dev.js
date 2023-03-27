const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@context': path.resolve(__dirname, 'src/context/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]

            },
            {
                test: /\.(jpg|jpeg|gif|webp|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            },



        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name][contenthash].css'
        }),
    ],
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist'),
            watch: true
        },
        watchFiles: path.join(__dirname, './**'),
        compress: true,
        historyApiFallback: true,
        port: 3033,
        open: true,
    }

}