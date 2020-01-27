function greeting() {
    console.log('Hello World');
  }
  // Invoking the function


  // We can add properties to functions like we do with objects
greeting.lang = 'English';
// Prints 'English'



  greeting();  // prints 'Hello World'


  console.log(greeting.lang);



  const square = function(x) {
    return x * x;
  }
  // prints 25
  console.log(square(5)); 


  const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map((year,index,birthYear) => 2018 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log("ages: ",ages);




// Creating Our own Higher-Order Function


const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
console.log("strArray: ",strArray);
console.log(lenArray);

// In the above example, we created an Higher-order function
//  mapForEach which accepts an array and a callback function fn.
//   This function loops over the provided array and calls the 
//   callback function fn inside the newArray.push function call 
//   on each iteration.