module.exports = {
    entry: './src/scripts/functions.js',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};