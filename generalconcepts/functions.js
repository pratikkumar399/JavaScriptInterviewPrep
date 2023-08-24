//  functions and function expressions

// function declaration
function greet() {
    console.log('hello there');
}

greet();

// function expression

var greetMe = function () {
    console.log('hello there');
}

greetMe();

// passing functions as arguments

function logGreeting(fn) {
    fn();
}

logGreeting(greetMe);

// function expression on the fly

logGreeting(function () {
    console.log('hello there');
}
);

// types of functions

// 1. function statement
function greet() {
    console.log('hello there');
}

// 2. function expression
var greetMe = function () {
    console.log('hello there');
}

// 3. Immediately Invoked Function Expression (IIFE)

var greetMe = function () {
    console.log('hello there');
}

greetMe();

// IIFE

(function () {
    console.log('hello there');
}
)();

// IIFE with parameters

(function (name) {
    console.log('hello ' + name);
}
)('Rishabh');

//  closures

function greet(whattosay) {
    return function (name) {
        console.log(whattosay + ' ' + name);
    }
}



// arrow function 

// what are arrow functions ? 

// arrow functions are a new way to write functions in ES6. They are also called fat arrow functions because they use a fat arrow =>
// arrow functions are more concise and also lexically bind the this value. By lexical binding, we mean that arrow functions use the value of the this keyword in the context in which they are defined. In contrast, regular functions use the value of the this keyword in the context in which they are called (called the dynamic context). Because of this behavior, arrow functions are particularly useful when working with callbacks, or when using function factories (functions that return other functions).
// arrow functions are always anonymous functions. They can be assigned to a variable, but you cannot name them. If you need to name a function, you need to use a function declaration or a function expression.	
// arrow functions do not have their own this value. The value of the this keyword inside an arrow function is always inherited from the enclosing scope. In contrast, regular functions always have their own this context. The value of the this keyword inside a regular function depends on how the function was called (the dynamic context).
// arrow functions do not have the arguments object. If you need to access the arguments object inside an arrow function, you need to use a rest parameter. In contrast, regular functions have access to the arguments object.
// arrow functions cannot be used as constructors. If you need to create objects using a constructor, you need to use a regular function.
// arrow functions do not have a prototype property. In contrast, regular functions have a prototype property that can be accessed via the function name.
// arrow functions cannot be used as generators. In contrast, regular functions can be used as generators using the function* syntax.
// arrow functions cannot change the value of this. In contrast, regular functions can change the value of this using the bind(), apply(), and call() methods.

// syntax

// () => { ... } // no parameter

// x => { ... } // one parameter, an identifier

// (x, y) => { ... } // several parameters

// (x, y) => x + y // concise syntax, implied "return"

// () => { return { a: 1 }; }

// () => ({ a: 1 }) // the object literal needs to be wrapped in parentheses

// () => {           // multi-line block
//   const x = 10;
//   return x * x;
// }

//example

// ES5
var multiplyES5 = function (x, y) {
    return x * y;
}

// ES6
const multiplyES6 = (x, y) => { return x * y };

// ES6 concise
const multiplyES61 = (x, y) => x * y;

// ES6 concise with implicit return 
const multiplyES62 = (x, y) => x * y;

// ES6 concise with implicit return and single argument
const multiplyES63 = x => x * x;

// ES6 concise with implicit return and no arguments

const multiplyES64 = () => 10 * 10;

// ES6 concise with implicit return and no arguments    
const multiplyES65 = () => { return 10 * 10 };

// ES6 concise with implicit return and no arguments

const multiplyES66 = () => ({ a: 1 });

// lets print tthem

console.log(multiplyES5(10, 10));
console.log(multiplyES6(10, 10));
console.log(multiplyES61(10, 10));
console.log(multiplyES62(10, 10));
console.log(multiplyES63(10));
console.log(multiplyES64());
console.log(multiplyES65());
console.log(multiplyES66());

// arrow functions and this keyword

// ES5
var person = {
    firstName: 'Rishabh',
    lastName: 'Chauhan',
    getFullName: function () {
        var that = this;
        return function () {
            console.log(that.firstName + ' ' + that.lastName);
        }
    }
}

person.getFullName()();

// ES6
var person = {
    firstName: 'Rishabh',
    lastName: 'Chauhan',
    getFullName: function () {
        return () => console.log(this.firstName + ' ' + this.lastName);
    }
}

person.getFullName()();

// arrow functions and this keyword

// ES5

function Person() {

    this.age = 0;

    setInterval(function () {
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p = new Person();

// ES6

let Person1 = () => {

    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

console.log(Person1())

