// we make generator by adding * in fron of function
// generator is creating an object.. if we invoke greet() nothing will happen
function* greet() {
    console.log(`You called 'next()'`);
    yield "hello";
}

// assigning greet to greeter
let greeter = greet();
console.log(greeter); // { next: [Function], throw: [Function]}
let next = greeter.next();
console.log(next); // { value: 'hello', done: false }
let done = greeter.next();
console.log(done); // { value: undefined, done: true }

// second example

function* greet2() {
    console.log(`Generators are "lazy"`);
    yield "How";
    console.log(`I'm not called until the second next`);
    yield "are";
    console.log(`Call me before "you"?`);
    yield "you?";
    console.log(`Called when "done"`);
}

var greeter2 = greet2();
console.log(greeter.next()); // Generators are "lazy" { value: 'How', done: false }
console.log(greeter.next()); // I'm not called until the second next { value: 'are', done: false }
console.log(greeter.next()); // Call me before "you?" { value: 'you?', done: false }
console.log(greeter.next()); // Called when done" { value: undefined, done: true }

for(let word of greeter2) {
    console.log(word); // word is grabing value of greeter object <=> greeter.next().value;
}

// third example

function* greet3() {
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?";
}

// its imposible to pass value to the first next() -> TypeError: Sent value to newborn generator
var greeter3 = greet3();
console.log(greeter3.next().value);            // How
console.log(greeter3.next("the heck").value);  // the heck are
console.log(greeter3.next("silly ol'").value); // silly ol' you?

// generators are helping us work with infinite sequances
// we can pause infinite while loop while untile the next step through after the yield proccess

function* graph() {
    let x = 0;
    let y = 0;
    while(true) {
        yield {x:x, y:y}
        x += 2;
        y +=1;
    }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);