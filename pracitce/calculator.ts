/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
 

function calculate(name:string, first:number, second:number):any {
    if (name === "add") {
        return first + second
    } else if (name === "substract") {
        return first - second
    } else if (name === "multiply") {
        return first * second
    } else if (name === "divide") {
        return first / second
    } else {
        return first % second
    }
}