module.exports = {
    presets: [
        "@babel/present-env",
        ["@babel/present-react", { runtime: "automatic" }]
    ],
    plugins: [
        "react-hot-loader/babel"
    ]
}
