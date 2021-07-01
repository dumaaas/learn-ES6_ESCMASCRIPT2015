// Promises with ES6 (2015)

// Promises can either be resolved or rejected
var d = new Promise((resolve, reject) => {
    setTimeout( () => {
        if(true) {
            resolve('hello world');
        } else {
            reject('no bueno');
        }
    }, 2000);
});

d.then((data) => console.log('success: ', data));
d.catch((error) => console.error('error: ', error));

// other way

d.then((data) => console.log('success: ', data), (error) => console.error('new error msg: ', error));

// another way

d.then((data) => console.log('success: ', data))
 .catch((error) => console.error('error: ', error));

// and yet another way

d.then((data) => console.log('success: ', data))   // hello world
 .then((data) => console.log('success 2: ', data)) // undefined
 .catch((error) => console.error('error: ', error));

// ? more ways

d.then((data) => {
    console.log('success: ', data); // hello world 
    return 'foo bar';
})
 .then((data) => console.log('success 2: ', data)) // foo bar
 .catch((error) => console.error('error: ', error));


