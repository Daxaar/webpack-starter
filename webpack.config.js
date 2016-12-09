//var dir_js = path.resolve("__dirname","js")
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { loader: 'babel-loader', test: /\.js$/ }
        ]
    },
    devtool: 'source-map',
};
