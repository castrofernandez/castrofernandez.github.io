const path = require('path');

module.exports = {
    entry: ['./src/js/index.js', './src/sass/main.scss'],
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.(png|jp(e*)g|svg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 limit: 8000, // Convert images < 8kb to base64 strings
            //                 name: 'images/[name].[ext]'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
