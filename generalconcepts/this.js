// this keyword in javascript

// this keyword is used to access the properties of object


// example

let obj = {
    name: 'Pratik',
    age: 21,
    address: {
        city: 'delhi',
        state: 'delhi'
    }
}

console.log(obj.name); // Pratik

// this keyword

let obj1 = {
    name: 'Pratik',
    age: 21,
    address: {
        city: 'delhi',
        state: 'delhi'
    }
}

console.log(this);

// this keyword in function

let obj2 = {
    name: 'Pratik',
    age: 21,
    address: {
        city: 'delhi',
        state: 'delhi'
    }

}

function fun() {
    console.log("Inside function", this); // window object
}

fun();

// this keyword in method

let obj3 = {
    name: 'Pratik',
    age: 21,
    address: {
        city: 'delhi',
        state: 'delhi'
    }
}

obj3.greet = function () {
    console.log(this); // obj3
}

obj3.greet();

let array = [1, 2, 3, 4, 5];

array.forEach(element => {
    console.log(element); // error
});

