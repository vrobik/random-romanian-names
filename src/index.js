var uniqueRandomArray = require('unique-random-array');
var namesB = require('./nameB.json');
var namesF = require('./nameF.json');
var all = [].concat(namesB,namesF);
module.exports = {
	all: all,
	random: uniqueRandomArray(all)
};