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

airLine.bookTickets.call(airLine1, 'Pratik', 1000);
console.log(airLine1.bookings);