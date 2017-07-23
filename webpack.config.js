module.exports = {
    entry: "./main.ts",
    output: {
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}