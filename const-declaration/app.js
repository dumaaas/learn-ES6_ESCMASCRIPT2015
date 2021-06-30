// ES5 -> constant variable uppercase + u can reasign it 
var VALUE = 'hello world';
VALUE = 'foo bar';
console.log('value: ' , VALUE); // value: foo bar

// ES6 -> const declarations allow us to create variable that is read only
const VALUE2 = {};
VALUE2.foo = 'bar';
console.log('value: ', VALUE2); // value: {foo: bar}

VALUE2 = 'bar2';
console.log('value: ', VALUE2); // exception: VALUE2 is read-only;
