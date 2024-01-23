const path = require("node:path")
module.exports = {
	entry: "./src/index.ts",
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist"),
		clean: true
	}
}