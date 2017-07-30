module.exports = {
	entry: "./src/components/App.tsx",
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
	},
	devServer: {
		port: 8080,
		contentBase: __dirname,
		clientLogLevel: "warning",
		inline: true
	}
};
