// // !1

// // for (var i = 1; i <= 3; i++) {
// //     (function () {
// //         const j = i;
// //         setTimeout(() => {
// //             console.log(j);
// //         }, 1000)
// //         clearInterval();
// //     })();
// // }


// // !2

// // function foo() {
// //     var send = "hello";
// //     console.log(send);
// //     return "hello";
// // }

// // var result = foo();
// // console.log(result);


// //  !3

// // console.log(a);

// // var a = function () {
// //     return 5;
// // }

// //  !4

// // async function hello() {
// //     try {
// //         const ans = "hello world";
// //         return ans;
// //     }
// //     catch (error) {
// //         console.log(error);
// //     }
// // }

// // const result = hello();
// // result.then((res) => console.log(res));


// //  !5

// // console.log([1, 2] == [1, 2]);

// // !6

// // const user1 = {
// //     name: "Pratik",
// //     age: 23,
// //     subjects: {
// //         general: "physics",
// //         inGeneral: "c++"
// //     }
// // }

// // const user2 = { ...user1, subjects: { ...user1.subjects } };

// // user2.name = "Himanshi";
// // user2.subjects.general = "singing"

// // console.log(user1);
// // console.log(user2);
// // // console.log(user2.subjects.general[0]);


// // !7

// function abc() {
//     console.log("Hi");
//     return "hi";
// }

// const result = new abc();
// console.log(result);

sayName();
// sayN();

var sayN = () => {
    console.log("Hello");
}

// var sayName = "hello";

function sayName() {
    console.log("Hello");
}