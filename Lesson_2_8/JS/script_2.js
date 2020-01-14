
// дважиение квадрата вправо влево
let left = 10;
document.onkeypress = function (e) {
    // console.log(e.keyCode);
    let sq = document.querySelector(".sq");
    if (e.keyCode == 100) {
        left += 10;
        sq.style.marginLeft = left + "px";
    }
    if (e.keyCode == 97) {
        left -= 10;
        sq.style.marginLeft = left + "px";
    }
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// движение квадрата вправо влево при помощи  стрелок
// let left = 10;
document.onkeydown = function (e) {
    // console.log(e);
    let sq = document.querySelector(".sq");
    if (e.key == "ArrowRight") {
        left += 10;
        sq.style.marginLeft = left + "px";
    } if (e.key == "ArrowLeft") {
        left -= 10;
        sq.style.marginLeft = left + "px";
    }
};