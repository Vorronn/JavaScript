// пробная версия
// document.querySelector("#test").onkeypress = function (e) {
    // console.log(e.keyCode);
    // if (e.keyCode < 48 || e.keyCode > 57) {
    //     console.log("Недопустимые символы");
    // } else {
    //     this.value += e.key;
    // } 
//     return false;
// };
//     // e.altKey false
//     // e.charCode 97
//     // e.code "KeyA"
//     // e.ctrKey false
//     // e.key: "a"
//     // e.keyCode: 97
//     // e.shiftKey: false;
//     return false;
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ограничение ввода символов в input только прописная латиница
document.querySelector("#test").onkeypress = function (e) {
    // console.log(e);
    // console.log(e.keyCode);
    if (e.keyCode < 97 || e.keyCode >122) {
        console.log("Неверный символ");
    } else {
        this.value +=e.key;
        
    }
    return false;
};

document.onkeypress = function () {
    console.log("keypress");
};

document.onkeydown = function () {
    console.log("onkeydown");
};

document.onkeyup = function () {
    console.log("onkeyup");
};