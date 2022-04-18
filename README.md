# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aidanantony/lotide`

**Require it:**

`const _ = require('@aidanantony/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: This function returns the first element in an array.
* `function2(tail)`: This function returns everything but the first element in an array.
* `function3(middle)`: This function returns the middle most element in an array. Returns one element for odd numbered arrays and two middle elements for even numbered arrays.
* `function4(flatten)`: This function returns a flattened array after being given an array with nested arrays. 
* `function5(map)`: This function takes in a callback function and an array. It returns a new array that has values that have been changed by the callback function.
* `function6(without)`: This function takes in two arrays. It returns an array that only contains values that are present in the first array but are not present in the second array.
* `function7(eqArrays)`: This function takes in two arrays and checks whether or not they are equal and returns a boolean. True if they are equal and false if they are not equal.
* `function8(assertEqual)`: This function takes in two values and checks whether they are equal. Returns the boolean true if they are equal and returns false if they are not equal. 
* `function9(assertArraysEqual)`: This function checks if two arrays are equal and will console.log a message indicating whether or not they are equal or not. 
* `function10(eqObjects)`: This function checks whether or not two objects are equal.
* `function11(assertObjectsEqual)`: This function checks whether two objects are equal and will console.log a message to indicate whether or not it is. 
* `function12(countLetters)`: This function takes in a sentence and returns an object that shows the letters as keys and the values of the keys as the number of times that the letter appeared in the sentence. 
* `function13(countOnly)`: The function will take in two parameters. One that is a set of items, the second parameter will be which of those items to count. It will then return just the items specified to count.
* `function14(findKeyByValue)`: The function takes in an object parameter and a value and then returns the key that corresponds to that value in the object.
* `function15(findKey)`: The function takes in a callback and and object. It returns the first key where the callback function evaluates to true. 
* `function16(letterPositions)`: The function returns all the index numbers of the letters in a string. 
* `function17(takeUntil)`: The function takes in an array and a callback function as parameters. It then returns a sliced array to us. The slice is based on the value returned by the callback function.