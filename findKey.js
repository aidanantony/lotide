let obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKey = function(object, callback) {
  //For in loop to loop through the keys in the obj object
  for (let element in object) {
    //Our conditional that checks if the value of the callback function is true. If it is return the first key.
    if (callback(object[element])) {
      return element;
    }
  }
};
console.log(findKey(obj, x => x.stars === 3));








