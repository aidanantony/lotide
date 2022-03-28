const eqArrays = function(arrayOne,arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    
    if (arrayOne[i] !== arrayTwo[i] || arrayOne.length !== arrayTwo.length) {
      return false;
    }
  
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`💯💯💯 Assertation Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`);
  }
};

const flatten = function(array) {
  return [].concat(...array);
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);