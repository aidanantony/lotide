const eqArrays = function(arrayOne,arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    
    if (arrayOne[i] !== arrayTwo[i] || arrayOne.length !== arrayTwo.length) {
      return false;
    }
  
  }
  return true;
};

module.exports= eqArrays;
