var uniqueRandomArray = require('unique-random-array');
var namesB = require('./numeB.json');
var namesF = require('./numeF.json');
var all = [].concat(namesB,namesF);
module.exports = {
	all: all,
	random: uniqueRandomArray(all)
};