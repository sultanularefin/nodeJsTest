const peopleObj = {
    jim: {
        name: "jim",
        age: 20
    },
    tim: {
        name: "tim",
        age: 22
    }
}

const checkboxData =
{
    Index7Row1RightO1: true,
    Index5Row1RightO1: false,
    Index6Row1LeftO1: true,
    Index5Row1LeftO1: false,
    Index6Row1LeftO3: true,
    Index3Row1RightO1: true,
    Index3Row1RightO3: false,
    Index1Row1RightO1: true,
    Index7Row1LeftO1: true,
    Index2Row1RightO1: true,
    Index4Row1RightO1: false,
    Index6Row1LeftO2: false,
    Index2Row1RightO2: true,
    Index4Row1LeftO1: false,
    Index3Row1RightO2: false,
    Index3Row1LeftO1: true,
    Index6Row1RightO2: true,
    Index2Row1LeftO1: true,
    Index1Row1RightO2: true,
    Index6Row1RightO1: true,
    Index1Row1LeftO1: true
}

const peopleArray = Object.values(peopleObj)

const CheckBoxArray = Object.values(checkboxData);




console.log("peopleArray: ", peopleArray);

console.log("CheckBoxArray: ",CheckBoxArray);


console.log("object Entries: ");

for (let [key, value] of Object.entries(checkboxData)) {
    console.log(`${key}: ${value}`);
  }



// taxi@taxi-HP-ProBook-4540s:~/others_12_12_19/arefinNodejs programs$ node mapvaluesObject.js
// peopleArray:  [ { name: 'jim', age: 20 }, { name: 'tim', age: 22 } ]
// CheckBoxArray:  [
//   true, false, true,  false,
//   true, true,  false, true,
//   true, true,  false, false,
//   true, false, false, true,
//   true, true,  true,  true,
//   true
// ]
// taxi@taxi-HP-ProBook-4540s:~/others_12_12_19/arefinNodejs programs$ 
