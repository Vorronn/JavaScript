let tabs = document.querySelectorAll(".tab");
let tabBody = document.querySelectorAll(".tab-body");
// console.log(tabs);
// console.log(tabBody);

function hideTabBody (a) {
    for (let i = a; i < tabBody.length; i++) {
        tabBody[i].style.display = "none";
    }
}

function resettingPropertiesTab (a) {
    for (let i = a; i < tabs.length; i++) {
        tabs[i].style.fontWeight = "normal";
        tabs[i].style.backgroundColor = "initial";
    }
}

hideTabBody(1);

tabs.forEach(function (element){
    element.onclick = showBody;
})

function showBody() {
    let data = this.getAttribute("data-id"); //получаем data-id кликнутого элемента
    // console.log(data);
    hideTabBody(0);
    resettingPropertiesTab(0);                                 //обнуляем стили всех элементов и скрываем их
    document.querySelector(`.tab-body[data-id="${data}"]`).style.display ="block";      //отображаем нужный элемент
    document.querySelector(`.tab[data-id="${data}"]`).style.fontWeight = "900";         //меняем шрифт меню на жирный
    document.querySelector(`.tab[data-id="${data}"]`).style.backgroundColor = "gray";   //меняем цвет кнопки меню
}