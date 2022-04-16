//  使用 TypeScript 开发类型函数

//命名函数
function addNumbers(x:number,y:number):number{
    return x+y;
}
console.log(addNumbers(1,2));

//匿名函数 函数没有名称，借变量名调用函数
let addNumbers2 = function (x: number, y: number): number{
    return x + y;
}
console.log(addNumbers2(3, 2));

let total = function (input: number[]): number{
    let total: number = 0;
    for (let i = 0; i < input.length; i++){
        if (isNaN(input[i])) {
            //isNaN：判定是否是数字，是返回false，不是返回true
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 3, length, 4]));//此处length就被isNaN判定continue跳过了

//箭头函数:定义匿名函数的简写语法，圣雷大括号和return
//Anonymous function
let addNumbers3 = function (x: number, y: number): number{
    return x + y;
}
//Arrow function
let addNumbers4 = (x: number, y: number): number => x + y;

//let total = function (input: number[]): number{
let total2 = (input: number[]): number => {
    let total: number = 0;
    for (let i = 0; i < input.length; i++){
        if (isNaN(input[i])) {
            //isNaN：判定是否是数字，是返回false，不是返回true
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total2([2,3,4]));