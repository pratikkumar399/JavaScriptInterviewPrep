/*
JSON stands for JavaScript Object Notation
JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page
It is same as object literal but the only difference is that in json the keys are always in double quotes
*/



// create a json 

var obj = {
    name: "Pratik",
    age: 23,
    college: "Chandigarh University"
}

// printing the object
console.log(obj);

// lets convert the object to json
var json = JSON.stringify(obj);
console.log(json);

// lets convert the json to object
var obj2 = JSON.parse(json);
console.log(obj2.name);

// lets modify json element
obj2.name = "Pratik2";
console.log(obj2.name);


// nested json
const nestedJsonString = '{"person": {"name": "Alice", "age": 28}}';
const nestedJsonObject = JSON.parse(nestedJsonString);
console.log(nestedJsonObject.person); // Output: Alice
