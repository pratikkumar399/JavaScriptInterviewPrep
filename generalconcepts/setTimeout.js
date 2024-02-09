// setTimeout and setInterval are functions that are used to delay the execution of a function.

// setTimeout -> executes a function, once, after waiting a specified number of milliseconds (1000 milliseconds = 1 second).

// setInterval -> same as setTimeout(), but repeats the execution of the function continuously. The interval is specified in milliseconds. If omitted, the interval value is 0. If the interval is set to 0, the function will be executed only once. Note: The function is not executed immediately after the specified number of milliseconds. There may be a delay of up to 250 milliseconds. Tip: 1000 ms = 1 second. Tip: To stop the execution of the function, use the clearInterval() method. Tip: To execute a function only once, after a specified number of milliseconds, use the setTimeout() method. 

// // setTimeout

// // syntax
// setTimeout(function, milliseconds, param1, param2, ...)
// 

// // example 
function greet(name) {
    console.log('Hello ' + name);
}

setTimeout(greet, 1000, 'John'); // Hello John

// // example
function greet1(name) {
    console.log('Hello ' + name);
}

setTimeout(greet1, 1000, 'John'); // Hello John         

// // example

function greet2(name, surname) {
    console.log('Hello ' + name + ' ' + surname);
}

setTimeout(greet2, 1000, 'John', 'Doe'); // Hello John Doe



// // setInterval

// // syntax
// setInterval(function, milliseconds, param1, param2, ...)

// // example

function greet3(name) {
    console.log('Hello ' + name);
}

myVar = setInterval(greet3, 500, 'John'); // Hello John // Hello John //   
clearInterval(myVar); // to stop the execution of the function

// arrow function
setInterval(() => {
    console.log('Hello World')
}, 1000);