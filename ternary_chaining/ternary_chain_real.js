

valueA = 100;
valueB = 50;
valueC = 200;
valueD =800;

const withTernary = ({
    conditionA, conditionB
  }) => (
      console.log("conditionA: ",conditionA),
      console.log("conditionB: ",conditionB),
    (!conditionA)
      ? valueC
      : (conditionB>100)
      ? valueA
      : (valueB>1000)
      ?2000
      :1
  );


  console.log(withTernary({conditionA:10, conditionB:20}));

  // taxi@taxi-HP-ProBook-4540s:~/others_12_12_19/arefinNodejs programs/ternary_chaining$ node ternary_chain_real.js
  // conditionA:  10
  // conditionB:  20
  // 1


  // lengthCategories >3?Dimensions.get('window').width/3:
  // lengthCategories===2?Dimensions.get('window').width/2:
  //     Dimensions.get('window').width;

  // arefintest@gmail.com pw: 1234512345


  // arefintest2@gmail.com pw: 1234512345

  