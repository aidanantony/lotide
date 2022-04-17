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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    // To skip the space, we only execute the code if the condition below is true
    if (letter !== ' ') {
      if (results[letter]) {
        // Array already exists for the results of this letter, so we add to it
        results[letter].push(i);
      } else {
        // Results have nothing for this letter, so we set results for this letter to a new array
        results[letter] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions('lighthouse in the house'));
// To test with assertArraysEqual we have to use .i after the letter positions function call
assertArraysEqual(letterPositions('lighthouse in the house').i,[1, 11]);

