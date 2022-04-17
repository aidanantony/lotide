const takeUntil = function(array, callback) {
  let newArray = [];
  for (let value of array) {
    if (callback(value)) {
      return newArray;
    } else {
      newArray.push(value);
    }
  }
  return newArray;
};

console.log(takeUntil([1,2,3,4,5,6,7,8], x => x < 5));
console.log(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x > 3));
console.log(takeUntil([1, 2, 5, 7, 2], x => x < 0));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
