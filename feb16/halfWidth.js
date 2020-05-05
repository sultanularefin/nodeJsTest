var shiftCharCode = Δ => c =>{
    console.log('at shiftCharCode',c);

     String.fromCharCode(c.charCodeAt(0) + Δ)

    };
var toFullWidth = (str) =>{ 

    console.log('str',str);
    str.replace(/[!-~]/g, shiftCharCode(0xFEE0));
};
var toHalfWidth = str =>{
    console.log('str',str);
 str.replace(/[！-～]/g, shiftCharCode(-0xFEE0));
 
};





console.log('toHalfWidth("A p p l e"): ',toHalfWidth("A p p l e"));
console.log('toFullWidth : ',toFullWidth('apple'));


//curried function 

const three = a => b => c =>
  a + b + c

const four = a => b => c => d =>
  a + b + c + d

console.log('three (1) (2) (3): ',three (1) (2) (3)); // 6

console.log('four (1) (2) (3) (4): ',four (1) (2) (3) (4)); // 10



const $ = x => k =>
  $ (k (x))
  
const add = x => y =>
  x + y

const mult = x => y =>
  x * y
  
$ (1)           // 1
  (add (2))     // + 2 = 3
  (mult (6))    // * 6 = 18
  (console.log) // 18
  
$ (7)            // 7
  (add (1))      // + 1 = 8
  (mult (8))     // * 8 = 64
  (mult (2))     // * 2 = 128
  (mult (2))     // * 2 = 256
  (console.log)  // 256