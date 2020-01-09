// одиночный клик мышки по div блоку
document.querySelector(".onclick").onclick = function() {
    console.log("click");
};
// двойной клик мышки по div блоку
document.querySelector(".ondblclick").ondblclick = function() {
    console.log("dblclick");
};
// движение мышки по div блоку
document.querySelector(".onmousemove").onmousemove = function() {
    console.log("mousemove");
};