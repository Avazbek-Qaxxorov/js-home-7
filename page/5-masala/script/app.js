// let num = +prompt("Son kiriting");
// function number() {
//     let i = num * 3;
//     return i 
// }

// let result = number()

// console.log(result);
let son = prompt("Istalgan birinchi son kiriting: ");
function number(num) {
    
     let num2 = [];
     for (let i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            num2.push(i);
        }
     }
     return num2
}
let n = son;
let num2 = number(n);
document.write(num2)