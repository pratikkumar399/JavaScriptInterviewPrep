// event bubbling

document.querySelector(".grandparent").addEventListener("click", () => {
    alert("Grandparent clicked");
}
);

document.querySelector(".parent").addEventListener("click", () => {
    alert("Parent clicked");
}
);

document.querySelector(".child").addEventListener("click", (event) => {
    console.log("Child clicked");
    console.log(event.target);
    event.stopImmediatePropagation();
}
);


// event capturing

// document.querySelector(".grandparent").addEventListener("click", (event) => {
//     alert("Grandparent clicked");
//     event.stopImmediatePropagation();
// }, true);

// document.querySelector(".parent").addEventListener("click", () => {
//     alert("Parent clicked");
// }, true);

// document.querySelector(".child").addEventListener("click", () => {
//     alert("Child clicked");
// }, true);


