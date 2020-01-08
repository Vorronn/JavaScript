let inputNumber = document.querySelector("#input-number");

let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);

let botton = document.querySelector("#btn");

function checkNumber () {
    let a = inputNumber.value;
    console.log(a);
    a = parseInt(a);

    if(a < 0 || a > 10 || isNaN(a)) {
        alert("Вы ввели некоректное число, введите число от 0 до 10");
    } else if(a === randomNumber) {
        alert("Вы угадали загаданное число");
        location.reload();
    } else {
        alert("Вы не угдали, попробуйте еще раз");
    }
    
}

botton.onclick = checkNumber;
