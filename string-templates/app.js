// string templates

// new way of concatenation

var salutation = "Hello";
var greeting = salutation + ", World"; // Hello, World
var greeting2 = `${salutation}, World` // Hello, World
console.log(greeting2);

// u can do expression

var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x+y}`; //  1 + 2 = 3

console.log(equation);

// functions with strings

function tag(strings, ...values) {
    if(values[0] < 20) {
        values[1] = "awake";
    } else {
        values[1] = "asleep";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

// we don't need brackets
var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);