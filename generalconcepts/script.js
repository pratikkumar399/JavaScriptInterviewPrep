console.log("Hello");

// variable decalration in javascript 

// var can be redeclared and reassign
var name = "Rahul";
var age = 20;
console.log(name, age);

// let can be reassigned but not redeclared

let name1 = "Rahul";
let age1 = 20;
console.log(name1, age1);

// const can neither be reassigned nor redeclared

const name2 = "Rahul";
const age2 = 20;
console.log(name2, age2);

// Data types in javascript

// 1. Primitive data types
// 2. Reference data types


// Primitive data types 

// 1. String 
let name3 = "Rahul";
console.log("My string is " + name3);
console.log("Data type is " + (typeof name3));

// 2. Numbers
let marks = 34;
console.log("Data type is " + (typeof marks));

// 3. Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// 4. Null -> intentional empty value
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// 5. Undefined -> variable not assigned a value
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference data types

// 1. Arrays -> collection of elements of different data types
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// 2. Object Literals -> key value pairs
let stMarks = {
    rahul: 89,
    shubham: 36,
    rohan: 34
}

console.log(typeof stMarks);

// 3. Functions -> first class citizens
function findName() {

}
console.log(typeof findName);

// 4. Date 
let date = new Date();
console.log(typeof date);
console.log(date);

// Type conversion and coercion

// Type conversion -> manual type conversion by the user
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let dateVar = String(new Date());
console.log(dateVar, (typeof dateVar));

let arrVar = String([1, 2, 3, 4, 5]);
console.log(arrVar.length, (typeof arrVar));

let i = 8;
console.log(i.toString());

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//stri prints NaN because array cannot be converted to number directly but typeof stri prints number because it is converted to number  internally by javascript 
console.log(stri, (typeof stri));

let number = parseFloat('34.098');
console.log(number.toFixed(2), (typeof number));

// Type coercion -> automatic type conversion by javascript
let mystr = "698";
let mynum = 34;
console.log(mystr + mynum);

let mystr1 = Number("698");
let mynum1 = 34;
console.log(mystr1 + mynum1);




