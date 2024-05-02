let son = prompt("Istalgan birinchi son kiriting: ");
function number(num) {
    
     let num2 = [];
     for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            num2.push(i);
        }
     }
     return num2
}
let n = son;
let num2 = number(n);
document.write(num2)