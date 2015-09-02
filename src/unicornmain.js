
require('./style.css');

require('./link/link.js')('index');
var Logger = require('./logger.js');

document.body.appendChild(require('./unicorn/unicorn.js'));

Logger.log('unicorn-page');