let ul = document.querySelector(".menu"),
    menu1 = document.querySelectorAll(".menu-item"),
    remu = document.querySelectorAll(".column"),
    del = document.querySelector(".adv"),
    answer = document.querySelector(".prompt");


ul.removeChild(menu1[2]);
ul.insertBefore(menu1[2], menu1[1]);
    

let li = document.createElement('li');
li.classList.add('menu-item');
ul.appendChild(li);
li.insertAdjacentText("afterbegin","Пятый пункт");

document.querySelector('body').style.background = 'url(img/apple_true.jpg) center no-repeat';
document.querySelector(".title").innerHTML = "Мы продаем только подлинную технику Apple";
console.log(remu);
remu[1].removeChild(del);


function quest(){
let quiz = prompt("Как вы относитесь к технике Apple?");
return quiz;    
}

answer.innerHTML = quest();