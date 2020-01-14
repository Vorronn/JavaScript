// пробная версия
// document.querySelector("#test").onkeypress = function (e) {
//     console.log(e.keyCode);
//     if (e.keyCode < 48 || e.keyCode > 57) {
//         console.log("Недопустимые символы");
//     } else {
//         this.value += e.key;
//     }
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
// document.querySelector("#test").onkeypress = function (e) {
//     // console.log(e);
//     // console.log(e.keyCode);
//     if (e.keyCode < 97 || e.keyCode >122) {
//         console.log("Неверный символ");
//     } else {
//         this.value +=e.key;
//         console.log(e.value);
//     }
//     return false;
// };
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// дважиение квадрата вправо влево
// let left = 10;
// document.onkeypress = function (e) {
//     console.log(e.keyCode);
//     let sq = document.querySelector(".sq");
//     if (e.keyCode == 100) {
//         left += 10;
//         sq.style.marginLeft = left + "px";
//     }
//     if (e.keyCode == 97) {
//         left -= 10;
//         sq.style.marginLeft = left + "px";
//     }
// };

// document.onkeypress = function () {
//     console.log("keypress");
// };

// document.onkeydown = function () {
//     console.log("onkeydown");
// };

// document.onkeyup = function () {
//     console.log("onkeyup");
// };

// ввод латинских символов строчных

// document.querySelector("#test").onkeypress = function (e) {
//     // console.log(e);
//     if (e.keyCode < 65 || e.keyCode > 122) {
//         console.log("недопустимые символы");
//     } if (e.shiftKey == true) {
//         e.shiftKey = false;
//         // e.keyCode = e.keyCode + "32";
//         console.log(e);    

//     }
// };

// движение квадрата вправо влево при помощи  стрелок
let left = 10;
document.onkeydown = function (e) {
    console.log(e);
    let sq = document.querySelector(".sq");
    if (e.key == "ArrowRight") {
        left += 10;
        sq.style.marginLeft = left + "px";
    } if (e.key == "ArrowLeft") {
        left -= 10;
        sq.style.marginLeft = left + "px";
    }
};