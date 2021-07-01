import { sumTwo, sumThree } from './math/addition.js';

// other ways to import

// import { 
//   sumTwo as saberiDvaBroja,
//   sumThree 
// } from './math/addition.js';
// saberiDvaBroja(2,4); -> 6

// import * as addition from './math/addition.js';
// addition.sumTwo(1,3); -> 4

console.log(
    `2 + 3 = ${sumTwo(2,3)}`
);

console.log(
    `2 + 3 + 4 = ${sumThree(2,3,4)}`
)