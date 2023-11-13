// localStorage in Js

localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
console.log(localStorage);

// get an item from local Storage
console.log(localStorage.getItem('name'));


// remove from local storage
localStorage.removeItem('name');

// local Storage only stores strings in values
// lets make an array of objects ans store it in local storage

let todos = [
    { text: 'play mariokart', author: 'shaun' },
    { text: 'buy some milk', author: 'mario' },
    { text: 'buy some bread', author: 'luigi' }
];

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

localStorage.setItem('todos', todosJSON);
let storedItem = localStorage.getItem('todos');
console.log(storedItem);

// parse the string back into an array of objects
storedItem = JSON.parse(storedItem);
console.log(storedItem);
