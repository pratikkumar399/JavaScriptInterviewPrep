// arrays in javascript

// 1. Array Literal
var arr = [1, 2, 3, 4, 5];
console.log(arr);

// 2. Array Constructor -> not recommended because it is slower than literal method and it is not safe to use with single argument as it will be considered as length of array and not the value of array element at index 0 
var arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);


// Array methods in Javascript

// 1. push() -> adds element at the end of array
arr.push(6);
console.log(arr);

// 2. pop() -> removes element from the end of array
arr.pop();
console.log(arr);

// 3. unshift() -> adds element at the beginning of array 
arr.unshift(0);

// 4. shift() -> removes element from the beginning of array
arr.shift();

// 5. indexOf() -> returns index of element in array
console.log(arr.indexOf(3));

// 6. splice() -> removes element from array at given index -> splice(index, no. of elements to be removed)
arr.splice(2, 1);

// 7. slice() -> returns a new array from given index to given index -> slice(start index, end index)
console.log(arr.slice(1, 3));

// 8. concat() -> returns a new array by concatenating two arrays -> concat(array1, array2)
var arr3 = [6, 7, 8, 9, 10];
console.log(arr.concat(arr3));

// 9. reverse() -> reverses the array
console.log(arr.reverse());

// 10. sort() -> sorts the array in ascending order
console.log(arr.sort());

// 11. join() -> returns a string by joining all the elements of array with given separator -> join(separator) -> default separator is comma    
console.log(arr.join(' '));

// 12. forEach() -> executes a function for each element of array
arr.forEach(function (element) {
    console.log(element);
}
);

// 13. map() -> returns a new array by executing a function for each element of array
var arr4 = arr.map(function (element) {
    return element * 2;
});
console.log(arr4);

// 14. filter() -> returns a new array by filtering elements of array based on a condition
var arr5 = arr.filter(function (element) {
    return element > 3;
});
console.log(arr5);

var arr = [1, 2, 3, 4, 5];

// 15. reduce() -> returns a single value by executing a function for each element of array

var arr6 = arr.reduce(function (accumulator, element) {
    console.log(accumulator, element);
    return accumulator + element;
});

console.log(arr6);

// 16. every() -> returns true if all the elements of array satisfy a condition
var arr7 = arr.every(function (element) {
    return element > 0;
});

console.log(arr7);

// 17. some() -> returns true if any of the element of array satisfy a condition
var arr8 = arr.some(function (element) {
    return element > 3;
});
console.log(arr8);


