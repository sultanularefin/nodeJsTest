const str = `{"childNodes": [{"childNodes": [Array], "nodeType": 3, "rawText": "


$24.87



"}], "classNames": ["a-size-medium", "a-color-secondary", "header-price"], "nodeType": 1, "parentNode": {"childNodes": [[TextNode], [HTMLElement], [TextNode], [Circular], [TextNode], [HTMLElement], [TextNode]], "classNames": ["a-column", "a-span4", "a-text-right", "a-span-last"], "nodeType": 1, "parentNode": {"childNodes": [Array], "classNames": [Array], "nodeType": 1, "parentNode": [HTMLElement], "rawAttrs": "class=\"a-row\"", "tagName": "div"}, "rawAttrs": "class=\"a-column a-span4 a-text-right a-span-last\"", "tagName": "div"}, "rawAttrs": "class=\"a-size-medium a-color-secondary header-price\"", "tagName": "span"}`;


const signs = ['$', '₹', '¥', '৳','£','€'];


let index =0;
let sign ='';

for (let i = 0; i < signs.length; i++) {

    index= str.indexOf(signs[i]);
    
    sign = signs[i];

    break;
  }


console.log('sign: ',sign);

console.log('index: ',index);

let PriceWithSign='';
if(index!==0){

    PriceWithSign = str.substr(index, 10).trim();
}




console.log('PriceWithSign: ',PriceWithSign);




let ultimatePrice = '';
if (PriceWithSign.charAt(0).includes(sign)) {
    ultimatePrice = PriceWithSign.substr(1);
  }
  console.log('ultimatePrice: ',ultimatePrice);
