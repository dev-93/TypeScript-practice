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

taenamAfterPay