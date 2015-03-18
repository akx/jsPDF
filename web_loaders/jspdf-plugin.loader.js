// A webpack loader to wrap jsPDF plugins in a closure expecting the jsPDF object
module.exports = function(content) {
	this.cacheable && this.cacheable();
	return "module.exports = function(jsPDF) { " + content + "};";
};
