
require('./link.css');

module.exports = function(name) {
	var a = document.createElement('a');

	a.innerHTML = name;
	a.href = name + '.html';

	document.body.appendChild(a);
}