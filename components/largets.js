console.log(Math.max(4,5,1,3)); // logs 5
// But you can’t pass an array of numbers to the method like this​:

// var num = [4,5,1,3];
// console.log(Math.max(num)); // logs NaN
// This is where the apply() method turns out to be useful:

var num = [4,5,1,3];
console.log(Math.max.apply(null, num)); // logs 5
