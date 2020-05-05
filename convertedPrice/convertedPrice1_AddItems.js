
const ConversionRate= {
    "DollarToTaka": "84.89",
    "DollarToEuro": "0.92",
    "EuroToDollar":"1.08",
    "DollarToYen": "109.79",
  };


const MonetaryUnits = [
    {"index":0,"name":"Dollar","unicode":"\u0024" },
    {"index":1,"name": "Euro","unicode":"\u20AC"},
    {"index":2,"name": "Yen","unicode":"\u00A5",},
    {"index":3,"name": "Taka","unicode":"\u09F3",},
  ];


// dollar.

// let selectedOneCategoryState= "\u0024"; 
// let itemPriceState = 2.356;


 // Euro 
// let selectedOneCategoryState= "\u20AC";    
// let itemPriceState = 100; 

// 108 dollar


// Yen.
// let selectedOneCategoryState= "\u00A5"; 
// let itemPriceState = 109.79; 

//1 dollar

// Taka.
let selectedOneCategoryState= "\u09F3"; 
let itemPriceState = 200;

// 1 dollar.



// MonetaryUnits[0].unicode



const convertedPrice =
          selectedOneCategoryState === MonetaryUnits[0].unicode
            ?
            (Number(itemPriceState)).toFixed(3)
            // above is dollar
            : selectedOneCategoryState === MonetaryUnits[1].unicode
            ?
            (Number(itemPriceState) * Number(
              ConversionRate.EuroToDollar)).toFixed(3)
            // // above is Euro to dollar
            : selectedOneCategoryState === MonetaryUnits[2].unicode
              ?
              (Number(itemPriceState) / Number(
                ConversionRate.DollarToYen)).toFixed(3)
              // above is  Yen to dollar
              :
              (Number(itemPriceState) / Number(
                ConversionRate.DollarToTaka)).toFixed(3);


        console.log('convertedPrice: ', convertedPrice);





        // let priceState = convertedPrice;
        let priceState = 2.36;
        const convertedPriceInMoneyHeaderConponent =

    selectedOneCategoryState === MonetaryUnits[0].unicode
      ?
      (Number(priceState)).toFixed(2)
      // above is dollar
      : selectedOneCategoryState === MonetaryUnits[1].unicode
      ?
      (Number(priceState) * Number(
        ConversionRate.DollarToEuro)).toFixed(2)
      // // above is Euro to dollar
      : selectedOneCategoryState === MonetaryUnits[2].unicode
        ?
        (Number(priceState) * Number(
          ConversionRate.DollarToYen)).toFixed(2)
        // above is  Yen to dollar
        :(
          console.log('for Taka'),
        (Number(priceState) * Number(
          ConversionRate.DollarToTaka)).toFixed(2)
          );

          console.log('convertedPriceInMoneyHeaderConponent: ',
          convertedPriceInMoneyHeaderConponent);