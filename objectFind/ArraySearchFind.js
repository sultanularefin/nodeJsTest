const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 110);

console.log(found);
// expected output: 12



const ItemData = [
    {
        "date": 1581232913298,
        "id": "rc6Tb4ZQUT913GHjyuHG",
        "itemData": {
            "amountNumber": 4,
            "categoryText": "Arefin's",
            "detailText": "Tedy",
            "imageURL": "https://firebasestorage.googleapis.com/v0/b/monoz-dc781.appspot.com/o/images%2Fmhmdarefin%40gmail.comNew%2FTupi0.013707230961983563itemName.png?alt=media&token=62c8d28f-7792-4e4f-bc35-99ee53df8a62",
            "nameText": "Tupi",
            "tagText": "Test",
            "urlText": "test"
        },
        "uploadedBy": "mhmdarefin@gmail.com",
        "user": "mhmdarefin@gmail.com"
    },

    {
        "date": 1581224724861,
        "id": "ncmu8UXWQjzjKwHbpvYv",
        "itemData": {
            "amountNumber": 3,
            "categoryText": "For Cleaning",
            "detailText": "Test",
            "imageURL": "https://firebasestorage.googleapis.com/v0/b/monoz-dc781.appspot.com/o/images%2Fmhmdarefin%40gmail.comNew%2FNapkins0.85543584166794itemName.png?alt=media&token=6a1ee1f3-a3ae-4a4c-92e1-9b485707963e",
            "nameText": "Napkins",
            "tagText": "Test",
            "urlText": "test"
        },
        "uploadedBy": "mhmdarefin@gmail.com",
        "user": "mhmdarefin@gmail.com"
    }
];


const foundItem = ItemData.find(element => element.id ==='rc6Tb4ZQUT913GHjyuHG');

// found returned will be element

console.log('foundItem: ',foundItem);


const filteredItems = ItemData.filter(oneItem => oneItem.id ==='rc6Tb4ZQUT913GHjyuHG');

console.log('filteredItems: ',filteredItems);


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log('result: ',result);