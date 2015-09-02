
require('./unicorn.css');

var temp = document.createElement('div');
temp.innerHTML = require('./unicorn.html');

module.exports = temp.firstChild;