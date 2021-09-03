{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT = 7;
        private coffeeBeans = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        };

        static makeMachine(coffeeBeans: number):CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        } 

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("커피 빈이 0개 보다 작을 수 없어요!!")
            }

            this.coffeeBeans += beans;
        }

        private grindBeans(shots:number) {
            console.log(`${shots} 만큼 글라인딩 하고 있습니다`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not Enough coffee beans!");
            }

            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };

        private preheat():void {
            console.log("데피는 중");
        };

        private extract(shots:number):CoffeeCup {
            console.log(`${shots} 만큼 커피 내리는 중`);

            return {
                shots,
                hasMilk: false,
            }
        }

        makeCoffee(shots:number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    };

    const maker1:CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker1.fillCoffeeBeans(32);
    maker1.makeCoffee(2);

    console.log(maker1)
    
    const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(2);

    console.log(maker2);
}
