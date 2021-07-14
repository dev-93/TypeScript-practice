console.log(this);
// Window 객체

function test() {
    console.log(this);
}

test(); // Window 객체
console.clear();
class Counter {
    count = 0;
    increase = function () {
        console.log(this)
    }
}

const counter = new Counter();
counter.increase(); // Counter (class)
const caller = counter.increase;
caller(); // undefined
const bindCaller = counter.increase.bind(counter)
bindCaller();

class Bob {};

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob