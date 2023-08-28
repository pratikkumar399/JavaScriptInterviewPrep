let arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQR", "STU", "VWX", "YZ"];

let lowerCase = [];

//lets apply foreach to convert all the elements to lower case
arr.forEach((item) => {
    lowerCase.push(item.toLowerCase());
})

console.dir(lowerCase);