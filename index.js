const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findByKeyValue = require('./findKeyByValue');
const flatten = require('./flatten');
const map = require('./map');
const without = require('./without');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head,
  middle,
  tail,
  eqArrays,
  countLetters,
  countOnly,
  findByKeyValue,
  flatten,
  map,
  without,
  eqObjects,
  assertEqual,
  assertArraysEqual
}

/* Only the functions that I have testing files for our showing up in this object in Node REPL.
   Due to the remaining functions being in stretch I have added them here but I can see they won't show
   up in Node REPL unless I do the stretch and come back */
   