document.querySelectorAll(".modal-show").forEach(function (element) {
    element.onclick = showModal;
});

function showModal () {
    // console.log("yes");
    let modalId = this.dataset.modal;
    // console.log(modalId);
    document.querySelector(modalId).parentElement.classList.remove("hide");
    document.querySelector(modalId).classList.remove("hide");
    document.onkeydown = function (e) {
        console.log(e);
        closeMenu();
    };
    
}

let buttonClose = document.querySelector(".button-close");
buttonClose.onclick = closeMenu;

let buttonExit = document.querySelector(".exit");
buttonExit.onclick = closeMenu;

let clicDivBlock = document.querySelector(".modal-wrap");
clicDivBlock.onclick = closeMenu;

function closeMenu () {
    document.querySelector(".modal-wrap").classList.add("hide");
    document.querySelector(".modal").classList.add("hide");
    document.onkeydown = null;
}

let clickOk = document.querySelector(".button-ok");
clickOk.onclick = function () {
    closeMenu();
    alert("new modal window");
};