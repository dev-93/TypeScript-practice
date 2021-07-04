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

function pay(employee: Employee): Employee {
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