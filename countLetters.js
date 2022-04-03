const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`);
  } else if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: [${actual}] === [${expected}]`);
  }
};

const countLetters = function(input) {
  const finalAnswer = {};
  let values = input.replace(/ /g, '');
  for (let letters of values) {
    if (finalAnswer[letters]) {
      finalAnswer[letters] += 1;
    } else {
      finalAnswer[letters] = 1;
    }
  }
  return finalAnswer;
};

console.log(countLetters("lighthouse in the house"));
