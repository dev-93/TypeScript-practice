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
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;

        get age(): number {
            return this.internalAge;
        }

        set age(num:number) {
            if (num < 1) {
                throw Error("나이는 1보다 작을 수 없습니다.");
            }
            this.internalAge = num;
        }

        constructor(private firstName: string, public lastName: string) {}
    }

    const user = new User("teanam","Kim");
    user.age = 0;
    console.log(user);
}