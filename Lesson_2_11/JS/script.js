let select = document.querySelector("#select-1");

select.onchange = function () {
    console.log(select.value);
}

let sendForm = document.querySelector("#send-form");
let form = document.querySelector("form");

sendForm.onclick = function (event) {
    event.preventDefault();
    console.log("work");
    console.log(serialize(form));
}