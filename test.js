'use strict';
var assert = require('assert');
require('./');
var myMap = new Map();
myMap.set(NaN, "not a number");

it('should ', function () {
	assert.deepEqual(myMap.toJSON(), {"NaN":"not a number"});
});
