// shadowing in js

var x = 10;
if (true) {
    var x = 20;
    console.log(x); // 20
}

console.log(x); // 20

// let keyword
// let keyword is used to declare a variable in js

let y = 10;
if (true) {
    let y = 20;
    console.log(y); // 20
}

console.log(y); // 10

// const keyword

const z = 10;
z = 30;

console.log(z); // 10