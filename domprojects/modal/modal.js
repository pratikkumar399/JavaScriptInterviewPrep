// lets make the modal
// we need to do two things
// grab the where is the modal button
//  grab the modal cross button

// grab the where is the modal button

const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal-container");
console.log(openModal.innerHTML);

// lets make the modal appear when the button is clicked

openModal.addEventListener("click", function () {
    modal.style.display = "block";
});

// grab the modal cross button
const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// lets add a event listener to the window so that when we click on the screen the window disappears
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});