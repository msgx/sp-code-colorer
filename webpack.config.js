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
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{ test: /\.js$/, loader: "source-map-loader", enforce: "pre" }
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};
