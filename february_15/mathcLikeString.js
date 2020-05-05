const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex1 = /[a-z]/g;
const found1 = paragraph.match(regex1);

console.log(found1);

const regex2 = /[A-Z]/g;
const found2 = paragraph.match(regex2);

console.log(found2);
// expected output: Array ["T", "I"]

const regex3 = /[The]/g;
const found3 = paragraph.match(regex3);

console.log(found3);
// expected output: Array ["T", "I"]

const s = "hello world!";
if (s.match(/hello.*/i)) {
  console.log('matched');
 
  // do something
  
}
else{
  console.log('not matched');
}

const test='lap';
const product = "laptop";
if (product.match(test)) {
  console.log('matched lap');
 
  // do something
  
}
else{
  console.log('lap not matched');
}