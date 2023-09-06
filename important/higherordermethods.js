// find in array

// find() -> returns the value of first element in array that satisfies the condition

// lets  make an array of objects

let student = [
    {
        name: "harry",
        subject: "javascript"
    },
    {
        name: "rohan",
        subject: "machine learning"
    },
    {
        name: "skillf",
        subject: "web dev"
    },
    {
        name: "patrick",
        subject: "python"
    }
]

let specialStudent = student.find((student) => {
    return student.subject === "python";
})

console.log(specialStudent.name);

// findIndex() -> returns the index of first element in array that satisfies the condition otherwise returns -1

let specialStudentIndex = student.findIndex((student) => {
    return student.subject === "python1";
})

console.log(specialStudentIndex);

// every and some in array

// every() -> returns true if all elements in array satisfies the condition otherwise returns false
// some() -> returns true if any one element in array satisfies the condition otherwise returns false

let isAllStudentsGood = student.every((student) => {
    return student.name.length >= 3;
});

console.log(isAllStudentsGood);

let isAnyStudentGood = student.some((student) => {
    return student.name.length >= 3;
});

console.log(isAnyStudentGood);