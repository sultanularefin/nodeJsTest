// LOG  ***************allItems: ***************** 

allItems = [{
    "date": 1581571210299,
    "id": "UJP1agNvFhHyCr7bjL9e",
    "itemData": {
        "amountNumber": 0,
        "categoryText": "Tissue",
        "detailText": "",
        "haveItcondition": true,
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/monoz-dc781.appspot.com/o/images%2Farefintest2%40gmail.comNew%2FFreshTissue0.2936229112496298itemName.png?alt=media&token=4b8864e5-e32c-43cf-ac3d-49632d8a9b5e",
        "nameText": "Fresh Tissue",
        "priceText": "",
        "tagText": "",
        "urlText": ""
    },
    "uploadedBy": "arefintest2@gmail.com",
    "user": "arefintest2@gmail.com"
},
{
    "date": 1581571102820,
    "id": "zcIVxvuQMMTjme6JMKr2",
    "itemData":
    {
        "amountNumber": 0,
        "categoryText": "Test1",
        "detailText": "",
        "haveItcondition": true,
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/monoz-dc781.appspot.com/o/images%2Farefintest2%40gmail.comNew%2FTest0.08584186889476952itemName.png?alt=media&token=c0e64e65-3796-4aac-a5cd-06f636f8ccac",
        "nameText": "Test",
        "priceText": "",
        "tagText": "",
        "urlText": ""
    },
    "uploadedBy": "arefintest2@gmail.com",
    "user": "arefintest2@gmail.com"
}
]



const LoadData = useCallback( () => {

    console.log('at LoadData: ','||||||||||||||||||||||||||');


    const serverDataStateTemp2:any[]=[];
    const request =  firestore().collection('items').where('user', '==',
      auth().currentUser.email).orderBy('date', 'desc').get().then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        setEmptyItemState(true);
        return;
      }

      // console.log('snapshot.docs: ',snapshot.docs);

      snapshot.forEach(doc => {
        // size= size +1;

        // let oneData =doc.data();
        const id =doc.id;
        console.log('id: ',id);
        const oneItemData =doc.data();
        /*
        // let nullImage=false;
        if(oneItemData && oneItemData.itemData && oneItemData.itemData.imageURL===null){
          // nullImage=true;
          // oneItemData.itemData.imageURL='https://meruherbs.com/wp-content/uploads/2017/07/no-product-image.png'
          oneItemData.itemData.imageURL='./../../assets/default-image_01.jpg'

        };
        */
        serverDataStateTemp2.push({id, ...oneItemData });

      });

      console.log('____________________________________',serverDataStateTemp2.length);
      setItemDataState(serverDataStateTemp2);
      setLoadingState(false);

    })
      .catch(err => {
        console.log('Error getting documents', err);
        setErrorState(true);
      });


  },[]);



  useFocusEffect(LoadData);

  