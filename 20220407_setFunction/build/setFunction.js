"use strict";
//Practice:创建函数
function displayAlert(message) {
    alert('The message is' + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(displayAlert(' message'));
console.log(sum([2, 3, 4]));
