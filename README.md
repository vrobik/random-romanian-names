# random-romanian-names
> return romanian name or all list

## Install

```sh
$ npm install --save random-romanian-names
```


## Usage

```js
var romanianNames = require('random-romanian-names');
var allNames = romanianNames.all;
var randomName = romanianNames.random();

console.log("List of names: ", allNames);
//=> List of names: ["ALEXANDRU", ...  ]

console.log("Random name: ", randomName);
//=> Random name: CĂTĂLIN
```