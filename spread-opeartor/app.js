// spread operator is used to spread array out into individual elements

console.log([1,2,3]); // [1,2,3]
console.log(...[1,2,3]); // 1,2,3

let first = [1, 2, 3];
let second = [4, 5, 6];

first.push(second); // [1, 2, 3, [4, 5, 6]]
first.push(...second); // [1, 2, 3, 4, 5, 6]

function addThreeThings(a, b, c) {
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first); // 6
addThreeThings(...second); // 15