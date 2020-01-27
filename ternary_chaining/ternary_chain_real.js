

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

