let fruit = {
    height: 200,
    width: 400,
    name: "apple"
};

console.log(fruit);
console.log(fruit.name);

fruit.color = "blue";
console.log(fruit);

fruit.figure = {
    form: "circle",
    tail: "line"
}

for(let key in fruit){
    console.log("object " + key + " value " + fruit[key]);
}

delete fruit.height;
console.log(fruit);

console.log(Object.keys(fruit).length);

let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push(5);

arr.shift();
arr.unshift(1);

console.log(arr);