// flat in javascript

// flat() -> returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];
// by default the level is 1
// let flatArr = arr.flat();

// lets increase the level now
let flatArr = arr.flat(2);
console.log(flatArr);


// flatMap

// flatMap() -> returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient.

let arrObject = [
    {
        name: "mobile",
        price: 10000,
        qty: 1
    },
    {
        name: "laptop",
        price: 50000,
        qty: 1
    },
    {
        name: "tv",
        price: 30000,
        qty: 1
    }
]

let flatArrObject = arrObject.flatMap((item) => {
    if (item.name === "mobile") {
        return [item, {
            name: "earphone",
            price: 1000,
            qty: 1
        }]
    }
    return item;
});

console.log(flatArrObject);