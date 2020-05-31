const path = require('path');
module.exports = {
    entry: './lib/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'phaserAnimate',
        libraryExport: 'default',
        umdNamedDefine: true,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            },
        ],
    },
};
