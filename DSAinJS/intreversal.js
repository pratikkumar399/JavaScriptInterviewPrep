let number = -12345;

const reversedNumber = number.toString().split("").reverse().join("");

console.log(parseInt(reversedNumber)*Math.sign(number));