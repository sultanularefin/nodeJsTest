

const test = 'https://firebasestorage.googleapis.com/v0/b/monoz-dc781.appspot.com/o/images%2Fmhmdarefin%40gmail.comNew%2FIjenAsset.png?alt=media&token=8b7ff8f3-52ca-4df4-8fa6-228cce738a25'

const result = test.split('.png');

// console.log('result: ',result);

const result2 = test.split('?');
// 
// console.log('result2: ',result2);

// console.log('result2[0] : ',result2[0] );



const urlToBeDeleted = 'https://firebasestorage.googleapis.com/v0/b/monoz-dc781.appspot.com/o/images%2Fmhmdarefin%40gmail.comNew%2Fbegin1582536116774itemName.png?alt=media&token=8bd1044f-850f-4b70-a8b4-6c6bc6d9cb26';
 
const sanitizerLeft = urlToBeDeleted.startsWith('googleapis');

console.log('sanitizerLeft: ',sanitizerLeft);


const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3))


const URL = 'https://www.youtube.com/watch?v=aiYpDDHKy18&list=RDaiYpDDHKy18&start_radio=1';




console.log('gg:',/[^&|\n|\t\s]+/.test(URL));

