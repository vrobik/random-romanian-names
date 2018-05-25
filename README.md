# random-romanian-names

[![Greenkeeper badge](https://badges.greenkeeper.io/vrobik/random-romanian-names.svg)](https://greenkeeper.io/)

> return romanian name or all list

## Install

```sh
$ npm install --save random-romanian-names
```


## Usage

```js
var romanianNames = require('random-romanian-names');
var allNames = romanianNames.all;
var allMale = romanianNames.allMale;
var allFemale = romanianNames.allFemale;
var randomMale = romanianNames.randomMale();
var randomFemale = romanianNames.randomFemale();
var randomName = romanianNames.random();

console.log("List of names: ", allNames);
//=> List of names: ["Adelin", ...  ]

console.log("Random name: ", randomName);
//=> Random name: Catalin

console.log("List of male names: ", allMale);
//=> List of male names: ["Adelin", ...  ]

console.log("List of female names: ", allFemale);
//=> List of female names: ["Adelina", ...  ]

console.log("Random male name: ", randomMale);
//=> Random male name: Filip

console.log("Random female name: ", randomFemale);
//=> Random female name: Sofia
```