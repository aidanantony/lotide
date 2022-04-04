const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`);
  } else if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: [${actual}] === [${expected}]`);
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



let findKeyByValue = function(obj,val) {
  let helper = Object.keys(obj);
  for (let key of helper) {
    if (obj[key] === val) {
      return key;
    }
   
  }
  return undefined;
};
console.log(findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine"));


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);