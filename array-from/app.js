// converting an array like object into an array with from 

// this is getting us a Node List
const products = document.querySelectorAll('.products');

console.log(products);

// problem with a Node List is that is like an Array but its not an Array
// so we don't have all typical Array methods that we want to use (filter, forEach, reduce)

// we need to convert this Node List into an Array 

const productsArray = 
    Array.from(document.querySelectorAll('.products'));

productsArray
    .filter(product => parseFloat(product.innerHTML) < 10)
    .forEach(product => product.style.color = 'red');