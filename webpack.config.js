module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./ui/index.tsx",
    output: {
        path: __dirname + "/public",
        filename: "index.bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [ 
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.jsx?$/, loader: "babel-loader" },
            { test: /\.scss?$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    }
};