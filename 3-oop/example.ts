{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean
    }

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT = 7;
        private coffeeBeans = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        };

        static makeMachine(coffeeBeans: number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        } 

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("커피 빈이 0개 보다 작을 수 없어요!!")
            }

            this.coffeeBeans += beans;
        }

        makeCoffee(shots:number): CoffeeCup {

            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not Enough coffee beans");
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

            return {
                shots,
                hasMilk: false,
            }
        }
    };

    const maker = CoffeeMaker.makeMachine(32);
    console.log(maker);
}
