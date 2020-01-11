var divElement = document.querySelectorAll(".block");
console.log(divElement);

for (let i = 0; i < divElement.length; i++) {
    divElement[i].onclick = function () {
        console.log("OOO");
        console.log(divElement[i].innerHTML);
    };
    

}


// function elem () {
//     for (let i = 0; i < divElement.length; i++) {
//         console.log("block")
//     }
// }