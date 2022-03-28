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

const middle = function(array) {
  let mid = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length < 3) {
      return mid;
    } else if (array.length >= 3 && array.length % 2 !== 0) {
      let oddMid = array[Math.ceil((array.length - 1) / 2)];
      mid.push(oddMid);
    } else if (array.length >= 3 && array.length % 2 === 0) {
      let evenMid1 = array[Math.floor((array.length - 1) / 2)];
      let evenMid2 = array[Math.ceil((array.length) / 2)];
      mid.push(evenMid1);
      mid.push(evenMid2);
    }
    return mid;
  }
};
console.log(middle([1,2,3,4,5,6]));