module.exports = {
	entry: "./jspdf-with-plugins.webpack.js",
	output: {
		path: 'dist',
		filename: 'jspdf.debug.js',
        libraryTarget: "umd",
        library: "jsPDF"
	}
};
