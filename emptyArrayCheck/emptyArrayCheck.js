






// or if you make it an array
// var arr: MyType[] = [
//   { "id": 0, "name": "Available" },
//   { "id": 1, "name": "Ready" },
//   { "id": 2, "name": "Started" }
// ];



type toBeCheckedType = {
    date: Date,
    itemData:{
      amountNumber: Number,
      categoryText: String,
      detailText: String,
      imageURL: String,
      nameText: String,
      tagText: String,
      urlText: String,
      priceText:Number,
      haveItCondition: Boolean,
    },
    uploadedBy: String,
    user: String,
  };

 const arr2: toBeCheckedType[] = [
   
  ];


  // const AnotherArray = Array.from(toBeChecked);

  toBeChecked[5].user="arefin";





  console.log('toBeChecked: ',toBeChecked);

  console.log('length: ',toBeChecked.length)

  // console.log('AnotherArray: ',AnotherArray);

  