const value ='$24.87';

let newValue;
if(value.charAt(0) === '$')
{
 newValue = value.substr(1);
}
console.log('Number($24.87): ',Number(newValue));