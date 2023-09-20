// chaining in js

// chaining is a way to call multiple methods on the same object in succession in a single line of code

// chaining
const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    getName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(user1.getName().toUpperCase()); // JOHN DOE

const name1 = "Pratik"

const ans = name1.split("").reverse().join("")
console.log(ans) // KITARP