const url = 'https://www.amazon.in/Redmi-8A-Dual-Blue-Storage/dp/B07WPVLKPW';

const value ='dp';
const found = url.match(value);

if(found){
    console.log('Found : ',value);

}
else {
    console.log('Not found: ',value);
}