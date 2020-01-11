// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Первый способ - работает с двумя вариантами получения списка элемента
let blocks = document.querySelectorAll(".block");
// или же этим метедом получения списка элементов
// let blocks = document.getElementsByClassName("block");

// функция для использования в цикле или же forEach
function clicks () {
    // console.log("click");
    // console.log(this);
    // console.log(this.innerHTML);             // выводит текст блока с внутренними тегами
    console.log(this.innerText);                // выводит текст блока без тегов
    this.style.backgroundColor = "blue";        // меняет цвет блока
    this.style.color = "white";                 // меняет цвет текста
    this.style.borderRadius = "50%";            // меняет блок из квадрата в круг
}

// цикл для получения элемента из списка элементов
for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = clicks;
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Второй способ
// Работает только с let blocks = document.querySelectorAll(".block");

// blocks.forEach(function (element) {
//     // console.log(element);
//     element.onclick = clicks;
        
// });