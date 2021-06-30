// problem with var is that message will be reasign 

var message = "hi";

{
    var message = "bye";
}
 
console.log(message); // bye

// we can avoid this with function scope 

function greet() {
    var message = "bye";
}

console.log(message); // hi

// to help with this problem we can use let that allows us to use block scoping

let message = "hi";

{
    let message = "bye";
}

console.log(message); // hi

// looping problem solved with let

var fs = [];

for (var i=0; i<10; i++) {
    fs.push(function () {
        console.log(i);
    });
}

fs.forEach(function(f) {
    f();
}) 

// var -> 10 10 10 10 10 10 10 10 10 10 (does not let us to reasignig i)
// let -> 0 1 2 3 4 5 6 7 8 9 (let as reasignig i)