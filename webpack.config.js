module.exports = {
	entry: "./components/App.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/scripts"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.js$/, exclude: /node_modules/, enforce: "pre", loader: "source-map-loader" }
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};
