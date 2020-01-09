document.querySelector("title").innerText = "INPUT";

document.querySelector("#btn").onclick = function() {
    
    //Вывод значений input.value
    console.log("Text: " + (document.querySelector(".text-input").value));
    console.log("Date: " + (document.querySelector(".date-input").value));
    console.log("Password: " + (document.querySelector(".password-input").value));
    console.log("Range: " + (document.querySelector(".range-input").value));
    console.log("color: " + (document.querySelector(".color-input").value));

    //Вывод значений input.checked для checkbox
    let check = document.querySelector(".checkbox-input");    
    if(check.checked) {
        console.log("Checkbox: Да");
    } else {
        console.log("Checkbox: Heт");
    }
    
    //Вывод значения input.checked для radio
    let radio = document.querySelectorAll(".radio-input");
    // console.log(radio);
    for (let i = 0; i < radio.length; i++) {
        // console.log(radio[i].checked);
        if(radio[i].checked) {
            console.log("Radio: " + (radio[i].value));
        }
    }
    //замена стиля текста в параграфах
    let parag = document.querySelectorAll("p");
    // console.log(parag);
    for (let i = 0; i < parag.length; i++) {
        // console.log(parag[i]);
        parag[i].style.color = "red";
    }

    // Вывод и работа с выпадающим списком
    let op = document.querySelectorAll("#my-select option");
    // console.log(op);
    for (let i = 0; i < op.length; i++) {
        // console.log(op[i].selected);
        // console.log(op[i].value);
        if (op[i].selected) {
            console.log(op[i].value);           //вывод атрибута value
            console.log(op[i].innerHTML);       //вывод текста тега option
        }
    }

}