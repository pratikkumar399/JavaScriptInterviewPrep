// sorting in array 

let array = ["apple", "orange", "banana", "mango", "grapes"];
array.sort();

console.log(array);

// sorting numbers
let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// ascending order
numArray.sort((a, b) => a - b);
console.log(numArray);

// descending order
numArray.sort((a, b) => b - a);
console.log(numArray);