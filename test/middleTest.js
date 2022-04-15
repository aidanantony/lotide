const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
// Test Code

console.log(middle([1,2,3,4,5,6,7]));
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);