function foo() {
    console.log("Simple function call")
    console.log(this === globalThis) // Use globalThis instead of global
}

let user = {
    count: 10,
    foo: foo,
    foo1: function () {
        console.log(this === globalThis) // Use globalThis instead of global
    },
}

user.foo()    // Prints "Simple function call" and then "false"
let fun1 = user.foo1
fun1()        // Prints "true"
user.foo1()   // Prints "false"
