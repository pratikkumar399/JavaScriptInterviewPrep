// call and apply are used to invoke a function

//  call -> first argument is this keyword and rest are the arguments of the function 


let airLine = {
    line: 'Air India',
    price: 1000,
    bookings: [],
    bookTickets: function (name, price) {
        console.log(`${name} booked a ticket for ${this.line} at ${price}`);
        this.bookings.push({ name, price });
    }
}

airLine.bookTickets('Pratik', 1000);
airLine.bookTickets('Pratik2', 10002);
console.log(airLine.bookings);

let airLine1 = {
    line: 'Air India2',
    price: 10002,
    bookings: [],
}

airLine.bookTickets.call(airLine1, 'Patrcik', 1000);
airLine.bookTickets.apply(airLine1, ['PatRick2', 10002]);
console.log(airLine1.bookings);


let obj = {
    name: 'Pratik',
    age: 21
}

let obj2 = {
    name: 'Pratik2',
    age: 22
}

const person1 = {
    name: 'Pratik',
    age: 21,
    greet: function (country) {
        console.log(`Hello ${this.name} your age is ${this.age} and you are from ${country}`);
    }
}

greeting.bind(obj2, 'India')();
console.log(this);
