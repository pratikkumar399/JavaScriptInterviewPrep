// function statement or function declaration
function a() {
    console.log("This is function statement");
}

// Function expression
var a = function () {
    return function xyz() {
        console.log("This is function expression");
    }
}

a()();

// FIRST CLASS FUNCTION : when functions are treated as variables . So the function can be assigned to a variable , passed as an argument to another function and can be returned from another function.
// first class citizen : when a function is treated as a variable and passed as an argument to another function and can be returned from another function.