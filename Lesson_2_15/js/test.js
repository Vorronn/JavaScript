// let click = document.querySelector(".click");
// click.onclick = function () {
//     console.log("click");
// };

function click (event) {
    console.log("click!!!");
    console.log("--------------------");
    console.log(event.target);
    console.log("--------------------");
    console.log(this);
}

// document.querySelector(".click").onclick = click;
// document.querySelector("body").onclick = click;
// document.querySelector("html").onclick = click;

document.onclick = function (event) {
    // console.log(event.target.className);
    if(event.target.className == "one"){
        console.log("Клацнули по div");
    }
};

document.querySelector(".three").onclick = function () {
    event.stopPropagation(); // отключение всплытия окна
    console.log("click three");
};

document.querySelector(".two").onclick = function () {
    console.log("click two");
};