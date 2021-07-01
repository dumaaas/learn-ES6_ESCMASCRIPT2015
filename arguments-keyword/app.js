// rest parameters vs arguments keyword

// arguments keyword return back to us an array like object of all arguments that have been passed to a function

function myFunc() {
    console.log(arguments);
    console.log(`Length: ${arguments.length}`);

}
 
myFunc(1, 2, 3); 

// [object Arguments] {
//      0: 1,
//      1: 2,
//      2: 3
// }
// Length: 3 

// we can't use array methods on arguments becouse it is array like object 

function Store() {
    var aisle = {
        fruit: [],
        vegetable: []
    }
    return {
        // Store().add('category', 'item1', 'item2');
        // ES5 way

        // add: function(category) {
        //     var items = [].splice.call(arguments, 1);
        //     console.log(items); // ["apples", "oranges"]
        //     items.forEach(function(value, index, array) {
        //         aisle[category].push(value);
        //     });
        // },
        
        // ES6 way
        add: function(category, ...items) {
            console.log(items); // ["apples", "oranges"]
            items.forEach(function(value, index, array) {
                aisle[category].push(value);
            });
        },
        aisle: aisle
    }
}

var myGroceryStore = new Store();
myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle); // [object Object] { fruit: ["apples", "oranges"], vegetable: [] }