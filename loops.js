// loops in javascript

// 1. for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// 2. while loop

var j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// 3. do while loop

var k = 0;
do {
    console.log(k);
    k++;
}
while (k < 10);

// 4. for in loop -> used to iterate over properties of an object

var obj = {
    name: 'Rishabh',
    age: 20,
    occupation: 'Student'
}

for (var prop in obj) {
    console.log(prop + ': ' + obj[prop]);
}

// 5. for of loop -> used to iterate over elements of an array  

var arr = [1, 2, 3, 4, 5];

for (var element of arr) {
    console.log(element);
}

// 6. forEach() -> executes a function for each element of array

arr.forEach(function (element) {
    console.log(element);
}
);

// 7. map() -> returns a new array by executing a function for each element of array

var arr4 = arr.map(function (element) {
    return element * 2;
}
);

console.log(arr4);

// 8. filter() -> returns a new array by filtering elements of array based on a condition

var arr5 = arr.filter(function (element) {
    return element > 3;
}
);

console.log(arr5);

// 9. reduce() -> returns a single value by executing a function for each element of array

var arr6 = arr.reduce(function (accumulator, element) {
    console.log(accumulator, element);
    return accumulator + element;
}
);

console.log(arr6);

// ternary operator

var age = 20;
age >= 18 ? console.log('You are an adult') : console.log('You are not an adult');

// switch case

var day = 'monday';

switch (day) {
    case 'monday':
        console.log('Today is Monday');
        break;
    case 'tuesday':
        console.log('Today is Tuesday');
        break;

    default:
        console.log('Invalid day');
        break;
}