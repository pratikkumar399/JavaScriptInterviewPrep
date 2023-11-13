// lets create constructor funtion

class Car {
    constructor(color, model) {
        // properties
        this.color = color;
        this.model = model;
    }
}

let instanceOfCar = new Car('red', 'BMW');
console.log(instanceOfCar);

let anoterhInstanceOfCar = new Car('blue', 'Audi');
console.log(anoterhInstanceOfCar);

// check if the current object is instance of the class it is using
console.log(instanceOfCar instanceof Car)

// protoType -> a general template using which we can assign methods to classed and the methods will be assigned to each
// instance of a class , with the help of protoTypal inheritance

Car.prototype.startEngine = function () {
    console.log("Engine got started of", this.model);
}

instanceOfCar.startEngine();
anoterhInstanceOfCar.startEngine();

// to check the prototype that has been used in the Car constructor we can use __proto__
console.log(instanceOfCar.__proto__);




