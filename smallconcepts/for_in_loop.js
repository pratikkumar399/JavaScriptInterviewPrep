//for_in_loop js

let car = {
    name: 'BMW',
    price: 1000000,
    color: 'black',
}

for (let key in car) {
    console.log(key, "->", car[key]);
}