// let op = document.querySelectorAll(".section option");

// console.log(op);
// console.log(op[1]);
// console.log(op[0]);



// for (let i = 0; i < op.length; i++) {
//     console.log(op[i].selected);
//     if (op[i].selected) {
//         console.log(op[i].value);

//     }
// }

function showhideBlocks(val) {
  if(val == 0) {
    document.getElementById("0").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
    clearing();
  } else if (val == 1) {
    document.getElementById("0").style.display = "block";
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "none"; 
    clearing();   
  } else if (val == 2) {
    document.getElementById("0").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none"; 
    clearing();
  }
}

function clearing () {
  wid.value= "";
  hid.value= "";
  dim.value= "";
  ino.value = "";
  wp.value = "";
  ip.value = "";
}

let wid = document.querySelector(".input-width");
let hid = document.querySelector(".input-height");
let dim = document.querySelector(".input-diametr");
let ino = document.querySelector(".input-area");
let wp = document.querySelector(".input-w");
let ip = document.querySelector(".input-i");
document.querySelector(".calc").onclick = function () {
  ino.value = wid.value * hid.value;
  wp.value = (wid.value * hid.value * hid.value)/6;
  ip.value = (wid.value * hid.value * hid.value * hid.value)/12;

  console.log(wid.value);
  console.log(hid.value);

}
