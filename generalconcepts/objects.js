// objects in javascript

// -> key value pairs 

let birthYear = 1999;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let obj = {
    name: 'Pratik',
    age: age,
    address: {
        city: 'delhi',
        state: 'delhi'
    },
    hobbies: ['coding', 'reading', 'writing'],
    greet: function () {
        console.log('hello');
        return 'hello';
    }
}

// accessing the properties of object
console.log(obj.greet());  // -> this gives undefined because greet function does not return anything 

// objectes inside array


let arr = [{    // array of objects
    name: 'Pratik',
    age: 21,
},
{
    name: 'Pratik',
    age: 22,
},
{
    name: 'Pratik',
    age: 23,
}]

arr.forEach((item) => {
    console.log(item);
})


const myObject = {
    value: 42,
    getValue: () => {
        console.log(this.value); // 'this' is inherited from the surrounding scope
    }
};

myObject.getValue();
