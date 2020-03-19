let buttonInterpolation = document.querySelector(".buttonInterpolation");
buttonInterpolation.onclick = showIntrepolation;

function showIntrepolation(){
    let windowModal = document.querySelector(".modalWindow");
    windowModal.classList.remove("hide");
    document.querySelector(".interpolation").classList.remove("hide");
}