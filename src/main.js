
// var style = require('style!css!./style.css');

require('./styles.js');


var Timer = require('./timer.js');
var Logger = require('./logger');


var timer = new Timer();

timer.start();

var h1 = document.createElement('h1');
h1.innerHTML = 'Webpack';

document.body.appendChild(h1);

timer.stop();
timer.print();

Logger.log(timer.elapsed());