const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map() -> returns a new array by executing a function for each element of array
const arr = nums.map((element) => {
    return element * 2;
});


const filteredArr = nums.filter((element) => {
    return element % 2 === 0;   // returns true or false    
});

console.log(arr);
console.log(filteredArr);

// reduce() -> returns a single value by executing a function for each element of array
const number = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(number);