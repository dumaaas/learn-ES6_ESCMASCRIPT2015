function greet(greeting, name) {
    console.log(greeting + ", " + name);
}

greet(); // undefined, undefined

function greet2(greeting, name = "John") {
    console.log(greeting + ", " + name);
}

greet2() // undefined, John

function greet3(greeting, name = "John") {
    console.log(greeting + ", " + name);
}

greet3("Hello") // Hello, John

function greet4(greeting, name = "John") {
    console.log(greeting + ", " + name);
}

greet4("Hello", "Bill") // Hello, Bill -> default (John) will be override by John

// Default function as parameter

function receive(complete = () => console.log("complete")) {
    complete();
}

receive(); // complete
receive(complete = () => console.log("receive")); // receive