const assertEqual = require('../assertEqual');
const tail = require('../tail')
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);