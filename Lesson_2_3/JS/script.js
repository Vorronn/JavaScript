let btn = document.querySelector("#btn");
btn.onclick = print;

// console.log(document.querySelector("link").href);
let i = true;
function print() {
    
    if(i===true) {
        document.querySelector("link").href = "css/style2.css";
        i = false;
    } else {
        document.querySelector("link").href = "css/style1.css";
        i = true;
    }
} 