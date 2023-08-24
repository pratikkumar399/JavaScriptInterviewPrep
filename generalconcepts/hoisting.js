// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
// happens with var keyword only not with let and const keyword because let and const keyword are block scoped and var keyword is function scoped and global scoped 

// example
console.log(x); // undefined
var x = 5;



// function hoisting-> function declaration are hoisted but not function expression , because function expression are assigned to variable and variable are not hoisted 

// example 

// function declaration 

hoisted(); // Output: "This function has been hoisted." 

function hoisted() {
    console.log('This function has been hoisted.');
}

// function expression

// expression();
//Output: "TypeError: expression is not a function

var expression = function () {
    console.log('Will this work?');
}
expression(); //  this will work

