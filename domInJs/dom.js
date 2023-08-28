// DOM (Created by browser as the html loads into the browser)

// browser create object of html called 'document object'


// // 1. getElementById

// const heading = document.getElementById('heading');

// // 2. getElementByTagName

// const heading2 = document.getElementsByTagName('h2');

// // 3 . getElementByClassName

// const heading3 = document.getElementsByClassName('heading1');

// // 4. querySelector

// const heading4 = document.querySelector('#heading');


// // 5. querySelectorAll
// const heading5 = document.querySelectorAll('h1');

// // Traversing the DOM

// // 1. parentNode
// const head = document.querySelector('#heading');
// const parent = head.parentNode;
// console.log(parent);

// // 2. childNodes
// const par = document.querySelector('.parent');
// console.log(par.childNodes);

// // previousSibling
// const par1 = document.querySelector('.heading1');
// console.log(par1.previousSibling);

// // nextSibling
// const par2 = document.querySelector('.heading1');
// console.log(par2.nextSibling);


// manipulating the DOM


const heading = document.querySelector('#heading');
heading.style.color = 'red';
heading.innerHTML = 'Hello World from DOM';


const parent = document.querySelector('.parent');
console.log(parent.children);
parent.firstElementChild.style.color = 'green';
parent.lastElementChild.style.color = 'blue';
parent.firstElementChild.nextElementSibling.style.color = 'orange';