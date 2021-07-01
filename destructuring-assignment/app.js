// old way 2 access obj prop
var obj = { 
    color: "blue"
}

console.log(obj.color); // blue

// with destructuring color become available to us 
var {color} = {
    color: "blue"
}

console.log(color); // blue

var {color, position} = {   
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
}

console.log(color); // blue
console.log(position) // forward

// common scenario where destructuring come into plate
function generateObj() {
    return {
        color: "blue",
        name: "John",
        state: "New York",
        position: "Forward"
    }
}

var {name, state} = generateObj();

console.log(name);  // John
console.log(state); // New York

var {name: firstName, state: location} = generateObj();

console.log(firstName); // John
console.log(location);  // New York

// example with array when we need first and last item

var [first,,,,fifth] = ["red", "yellow" , "green", "blue", "orange"];

console.log(first); // red
console.log(fifth); // orange

// desturing array of objects with forEach

var people = [
    {
        "firstName": "Clinton",
        "lastName": "Ruiz",
        "city": "New York"
    },
    {
        "firstName": "Marko",
        "lastName": "Dumnic",
        "city": "Niksic"
    },
    {
        "firstName": "Stefan",
        "lastName": "Tomovic",
        "city": "Brsno"
    },
    {
        "firstName": "Milos",
        "lastName": "Jovovic",
        "city": "Budva"
    }
]

people.forEach( ({firstName}) => console.log(firstName)); // Clinton Marko Stefan Milos

// we are assigning to Marko second object in array
var [,Marko] = people;

// then we are destructuring object in logCity and looking for only city in that object
function logCity({city}) {
    console.log(city); // Niksic
}

// invoking function with Marko object
logCity(Marko); // Niksic