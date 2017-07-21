module.exports = {
	entry: "./components/App.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/scripts"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" }
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};
