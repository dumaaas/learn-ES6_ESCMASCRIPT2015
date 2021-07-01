var color = "red";
var speed = 10;
var start = "start";
// ES5 way
// var car = {color: color, speed: speed};

// ES6 way -> if we declare props with the exact same name it will act like ES5 way
var car = {
    color, 
    speed,
    // ES6
    go() {
        console.log("vroom");
    },
    // ES6
    // go: function() { console.log("vroom"); }
    // Cool trick with functions (computed prop)
    ["stop"]: function() {
        console.log("stooop!");
    },
    [start]: function() {
        console.log("start!");
    }
};

console.log(car.color); // red
console.log(car.speed); // 10
car.go(); // vroom
car.stop(); // stooop!
car.start(); // start!;

