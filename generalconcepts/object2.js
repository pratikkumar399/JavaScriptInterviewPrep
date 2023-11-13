const mySym = Symbol("Key1")

const userJs = {
    name: "Pratik",
    [mySym]: "Praitk Rai",
    age: 23,
    userFullName: {
        fullName: {
            fullName1: "Pratik Rai"
        }
    }
}


// adding functions in objects 
userJs.play = function () {
    console.log("User Plays")
}

// console.log(userJs["full name"])
console.log(userJs.userFullName.fullName.fullName1) 