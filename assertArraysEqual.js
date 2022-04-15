const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`💯💯💯 Assertation Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;