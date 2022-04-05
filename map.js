const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback) {
  const results = []
  for (let character of array) {
    console.log('character before:', character)
    console.log('character after:', callback(character))
    console.log('---');
  }
  return results
};

const results1 = map(words, word => word[0]);
console.log(results1);