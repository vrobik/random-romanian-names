var uniqueRandomArray = require('unique-random-array');
var romanianNames = require('./names.json');
module.exports = {
	all: romanianNames,
	random: uniqueRandomArray(romanianNames)
};