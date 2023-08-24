// higher order functions

// What are higher order functions?

// A higher order function is a function that takes a function as an argument, or returns a function.

// In JavaScript, functions are first-class objects, i.e. they can be:

// stored in a variable, object, or array
// passed as an argument to a function
// returned from a function


// example

let hello = () => {
    return 'hello';
}

let bye = () => {
    return 'bye';
}
// function passed as an arguement to another function -> callback function
// what is a callback function?
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

let greeting = (fn) => {
    console.log(fn());
}

greeting(hello); // hello


// function returned from another function

let greeting1 = () => {
    return hello();
}

console.log(greeting1()); // hello


function num() {
    console.log('hello');
}

function num1(num) {
    num();
}

num1(num); // hello