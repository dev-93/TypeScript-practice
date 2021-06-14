{
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    }

    class coffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans:number = 0;

        private constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): coffeeMaker {
            return new coffeeMaker(coffeeBeans);
        }

        // 외부에서 채워지는 beans양을 체크해주는 곳
        fillCoffeeBean(beans:number) {
            if(beans < 0) {
                throw Error("커피콩은 0개 보다 커야되는데~")
            }

            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * coffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not Enough coffee beans");
            }

            this.coffeeBeans -= shots * coffeeMaker.BEANS_GRAMM_PER_SHOT;

            return {
                shots,
                hasMilk: false,
            }
        }
    }

    const maker = coffeeMaker.makeMachine(32);
    maker.fillCoffeeBean(32);

    class User {
        firstName: string;
        lastName: string;
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    const user = new User("teanam","Kim");
    console.log(user.fullName);
    user.firstName="yoo";
    console.log(user.fullName);
}