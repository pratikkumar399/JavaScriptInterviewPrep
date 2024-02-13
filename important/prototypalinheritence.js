// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = function () {
//     console.log(`${this.constructor.name} makes a sound`);
// }

// function Dog(name) {
//     this.name = name;
// }

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Dog.prototype.barks = function () {
//     console.log("woof");
// }

// const bolt = new Dog("bolt");
// console.log(bolt.name);
// bolt.barks();
// bolt.makeSound();


class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.constructor.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    barks() {
        console.log(`woof`)
    }
}

const bolt = new Dog("bolt");
console.log(bolt.name);
bolt.barks();
bolt.makeSound();


