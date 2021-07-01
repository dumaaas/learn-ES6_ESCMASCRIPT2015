// MAPS

// Map objects is just a simple key-value map
// Javascript objects and maps are very similar to each other
// Map offers us few bonuses that we don't get from object
// Differences 
// in object key has to be a string, in map can be anything from function to an object...
// map has a methods that can help us to manipulate and get information from map

var myMap = new Map();

// API
/*
    set()
    get()
    size
    clear()
    has()
*/

myMap.set('foo', 'bar'); // setting map element with key: 'foo' and value: 'bar'
myMap.set('hello', 'wolrd'); // setting map element with key: 'hello' and value: 'world'

console.log(myMap.get('foo')); // "bar"

// if we attempt to access the value that does not exist we will get undefined
console.log(myMap.get('qwerty')); // undefined

console.log(myMap.size); // 2

myMap.clear() // clear the elements of map
console.log(myMap.size); // 0

// has is checking if key exist and return true or false
console.log(myMap.has('foo')) // true
console.log(myMap.has('qwerty')) // false

// ITERATORS
/* 
    keys()
    entries()
    values()
*/

// we get keys of our map
for(var key of myMap.keys()) {
    console.log(key); // "foo" "hello"
}

// we get values of our map
for(var value of myMap.values()) {
    console.log(value); // "bar" "world"
}

// entries return us array made of arrays where the first item in arrays is the key
// and the second item is the value
for(var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value); // "foo = bar" "hello = world"
}

// WEAKMAPS 

// weakmaps means that no references are held to the keys of the map
// with no references being held to the keys of the map it allows
// to be available for automatic garbage collection that is available
// to us in JavaScript. Becouse no references are held to the keys
// that means we can not iterate over them. Becouse of this the options
// of what is available for us to use keys in a map is limited when using 
// weakmaps. 

// For example, with a map we can use anything as a key

var myObj = {};
var myFunc = function(){};

myMap.set(myObj, 'bar');    // "[object Object] = bar"
myMap.set(myFunc, 'world'); // "function myFunc() {} = world"
myMap.set('string', 2);     // "string = 2"

var myWeakMap = new WeakMap();

myWeakMap.set('string', 2)                     // Error: Invalid value used as weak map key
for(var [key, value] of myWeakMap.entries()) { // Error: myWeakMap.entries is not a function
    console.log(key + ' = ' + value);
}
