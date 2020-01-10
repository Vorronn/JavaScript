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
// заоход мышки на элемент один раз считает
document.querySelector(".onmouseenter").onmouseenter = function() {
    console.log("mouseenter");
};
// выход мышки из элемента
document.querySelector(".onmouseleave").onmouseleave = function() {
    console.log("mouseleave");
};
// прокрутка колесика мышки
document.querySelector(".onmousewheel").onmousewheel = function() {
    console.log("wheel");
    return false;
};

// контект меню - не рекомендовано к использоавнию 
document.querySelector(".oncontextmenu").oncontextmenu = function() {
    console.log("contextmenu");
    return false;
};