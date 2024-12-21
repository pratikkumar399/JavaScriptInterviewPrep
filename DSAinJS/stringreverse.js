// hello -> olleh

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("hello"));

let str = "hello";
let reversedString = "";
for (let i = str.length; i >= 0; i--) {
    reversedString +=  str[i];
}

console.log(reverseString);