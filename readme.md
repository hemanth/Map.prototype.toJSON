# map.prototype.tojson [![Build Status](https://travis-ci.org/hemanth/map-prototype-tojson.svg?branch=master)](https://travis-ci.org/hemanth/map-prototype-tojson)

> ES7 map.prototype.tojson polyfill


## Install

```
$ npm install --save map.prototype.tojson
```


## Usage

```js
require('map.prototype.tojson');
var myMap = new Map();
myMap.set(NaN, "not a number");

console.log(myMap.toJSON()); // {"NaN":"not a number"}
```

## License

MIT © [hemanth](http://h3manth.com)
