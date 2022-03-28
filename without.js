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

let without = function(original,remove) {
  let newArray = [];
  for (let i = 0; i < original.length; i++) {
    let dontAdd = false;
    for (let j = 0; j < remove.length; j++) {
      if (original[i] === remove[j]) {
        dontAdd = true;
      }
    }
    if (dontAdd === false) {
      newArray.push(original[i]);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
