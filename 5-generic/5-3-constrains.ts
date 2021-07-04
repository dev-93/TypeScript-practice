interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log("정직원");
    }

    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log("알바");
    }

    workPartTime() {
        
    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입을 다시 리턴하는 함수는 좋지 않음.
// function payBad(employee: Employee): Employee{
//     employee.pay();
//     return employee;
// }

function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const taenam = new FullTimeEmployee();
const jihun = new PartTimeEmployee();

taenam.workFullTime();
jihun.workPartTime();

const taenamAfterPay = pay(taenam);
const jihunAfterPay = pay(jihun);

const obj = {
    name: 'taenam',
    age: 29,
};

const obj2 = {
    animal: 'dog',
};

console.log(getValue(obj, 'name')); // taenam
console.log(getValue(obj, 'age')); // 29
console.log(getValue(obj2, 'animal')); // dog

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// 어떠한 object 타입을 받아서, 
// k라는 것은 object 안에있는 key들 중에 하나여야만 하고, 리턴되는 것은 object에 있는 key가 가리키고 있는 value 타입이여야 한다.