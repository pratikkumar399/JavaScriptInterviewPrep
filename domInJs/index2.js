// // Get element by ID (assuming there's an element with id="exampleId" in your HTML)
// let elementById = document.getElementById('unique');
// elementById.textContent = "No"
// console.log(elementById, "id");

// // Get elements by class name
// // let elementsByClassName = document.getElementsByClassName('box');
// // console.log(elementsByClassName);

// // Get elements by tag name
// // let elementsByTagName = document.getElementsByTagName('div');
// // console.log(elementsByTagName);

// let querySelector = document.querySelector('.box');
// // querySelector.style.color = "blue";
// querySelector.textContent = "hi hello";
// console.log(querySelector);

// let querySelectorAll = document.querySelectorAll('.box');
// console.log(querySelectorAll);

// // console.log(document.body);



// const box = document.querySelectorAll(".box");
// let clicked = true;

// function clickEvent() {
//     if (clicked) {
//         box[0].style.backgroundColor = "blue";
//         clicked = false;
//     }
//     else {
//         box[0].style.backgroundColor = "red";
//         clicked = true;
//     }
// }

const button = document.getElementsByClassName("btn");
console.log(button);

button[0].addEventListener("mouseover", function () {
    console.log("here");
})

