{
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    }

    class coffeeMaker {
        static BEANS_GRAMM_PER_SHOT:number = 7; //class level, class와 연결이 되어있기 때문에, object 만들어질때마다 생성 X
        coffeeBeans:number = 0; //instance(object) level

        constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
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

    const maker = new coffeeMaker(32);
    console.log(maker);
    const maker2 = new coffeeMaker(14);
    console.log(maker2);
}