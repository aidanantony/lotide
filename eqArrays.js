const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertation Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`);
  }
};


const eqArrays = function (arrayOne,arrayTwo) {
  for(let i = 0; i < arrayOne.length; i++) {
    
    if (arrayOne[i] !== arrayTwo[i] || arrayOne.length !== arrayTwo.length){
      return false
    }
  
  }
  return true
}
//My two test cases using my assertEqual function 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) 
assertEqual(eqArrays([1, 2, 3], [1, 2, "4"]), true)