let a = [1, 3, 3, 9];
let b = [1, 2, 3, 4, 5];

let c = a.concat(b);

let joined = a.join('->');

console.log(c);
// console.log(joined);


// slice 
// non-mutating ( array does not change)
let sliced = c.slice(2, 5);
console.log(sliced);

// splice
// mutating ( array changes)

let spliced = c.splice(2, 5, 1);
console.log(spliced);
console.log(c);

// at method -> works on negative index as well
let at = c.at(-1);
console.log(at);
