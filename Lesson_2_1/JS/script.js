function hello() {
    console.log("Hello world!!!");
}
let btn = document.querySelector("#btn");
console.log(btn.id);
btn.onclick = hello;

let buttonShow = document.querySelector("#botton-show");
console.log(buttonShow.id);



function show() {
    let window = document.querySelector(".window");
    window.style.display = "block";
    window.style.backgroundColor = "red";
}

buttonShow.onclick = show;

let hide = document.querySelector("#hide");
console.log(hide.id);

function hiddenDiv() {
    let window = document.querySelector(".window");
    window.style.display ="none";
}

hide.onclick = hiddenDiv;

