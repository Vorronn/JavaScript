let formSlider = document.querySelector(".form-slider");
document.querySelector(".read-rules").onclick = function(){
    formSlider.style.marginLeft = "-300px";
}

let backForm = document.querySelectorAll(".back");
// console.log(backForm);
for (let i = 0; i < backForm.length; i++){
    backForm[i].onclick = closeShow;
}

function closeShow () {
    formSlider.style.marginLeft = "0";
}