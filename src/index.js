var uniqueRandomArray = require('unique-random-array');
var namesB = require('./numeB.json');
var namesF = require('./numeF.json');
var all = [].concat(namesB,namesF);
module.exports = {
	all: all,
	allMale: namesB,
	allFemale: namesF,
	randomMale: uniqueRandomArray(namesB),
	randomFemale: uniqueRandomArray(namesF),
	random: uniqueRandomArray(all)
};