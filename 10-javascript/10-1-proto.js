const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.proto === y.proto);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // instance member level
    // this.makeCoffee = (shots) => {
    //     console.log("coffee making... ");
    // }
};

// prototype member level
CoffeeMachine.prototype.makeCoffee = shots => {
    console.log("coffee making... ");
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
};

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee(); // coffee making