module.exports = {
	entry: "./src/Components/App.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/src/Scripts"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "babel-loader" },
			{ test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};
