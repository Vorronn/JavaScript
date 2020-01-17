// console.log(modalShow);
document.querySelectorAll(".modal-show").forEach(function (element) {
    element.onclick = showModal;
});

function showModal () {
    // console.log("yes");
    let modalId = this.dataset.modal;
    
    document.querySelector(modalId).parentElement.classList.remove("hide");
    document.querySelector(modalId).classList.remove("hide");
}