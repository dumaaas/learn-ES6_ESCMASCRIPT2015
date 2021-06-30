// shorthand properties is like destructuring backwards
// this syntax allow you to easily construct objects with the props and things we already have and build it up however we like
let firstName = "John";
let lastName = "Lindquist";

let person = {firstName, lastName};

console.log(person) // {firstName: 'John', lastName: 'Lindquist'}

let mascot = "Moose";
let team = {person, mascot};

console.log(team); // { person: { firstName: 'John', lastName: 'Lindquist' }, mascot: 'Moose' }