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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback) {
  const results = [];
  for (let character of array) {
    results.push(callback(character));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(words,words);
assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(words,words[0]);