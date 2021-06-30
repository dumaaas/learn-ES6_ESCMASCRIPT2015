// 1. Recreate next function into arrow function

var createGreeting = function(message, name) {
    return message + name;
}

// we don't have to write return keyword when we dont have brackets
var arrowGreeting = (message, name) => message + name;

// 2. Handle this keyword scope problem with arrow function

var deliveryBoy = {
    name: "John",
    
    handleMessage: function (message, handler) {
        handler(message);
    },

    // handle with arrow function 

    // receive: function () {
    //     var that = this;
        
    //     this.handleMessage("Hello, ", function (message) {
    //         that.name; // get the proper name
    //         console.log(message + that.name);
    //     })
    // }

    receive: function () {
        this.handleMessage("Hello, ", message => console.log(message + this.name));
    }
}

deliveryBoy.receive();
