let eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    
    if (first[i] !== second[i] || first.length !== second.length) {

      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let objOneLength = Object.keys(object1).length;
  let objTwoLength = Object.keys(object2).length;
  if (objOneLength !== objTwoLength) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      console.log(object1[key]);
      console.log(eqArrays(object1[key],object2[key]));
      if (eqArrays(object1[key],object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
      
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`💯💯💯 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`❌❌❌ Assertation Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};
assertObjectsEqual({a:1, b:2, c:3}, {a:1, b:2, c:3});