{
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
    }

    class CafeLatteMachine {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans:number = 0;

        private constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): coffeeMachine {
            return new coffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans:number) {
            if(beans < 0) {
                throw Error("커피콩은 0개 보다 커야되는데~")
            }

            this.coffeeBeans += beans;
        }

        clean() {
            console.log("기계 청소 중...");
        }

        private grindBeans(shots:number) {
            console.log(`${shots}만큼 콩을 갈고있어.`);
            if(this.coffeeBeans < shots * coffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("커피콩이 충분하지 않아!");
            }
            this.coffeeBeans -= shots * coffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void {
            console.log("데우고 있습니다");
        }

        private extract(shots: number): CoffeeCup {
            console.log(`${shots}개의 샷을 내리고 있습니다~`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            return {...coffee, hasMilk: true};
        }
    }

    class coffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans:number = 0;

        private constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): coffeeMachine {
            return new coffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans:number) {
            if(beans < 0) {
                throw Error("커피콩은 0개 보다 커야되는데~")
            }

            this.coffeeBeans += beans;
        }

        clean() {
            console.log("기계 청소 중...");
        }

        private grindBeans(shots:number) {
            console.log(`${shots}만큼 콩을 갈고있어.`);
            if(this.coffeeBeans < shots * coffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("커피콩이 충분하지 않아!");
            }
            this.coffeeBeans -= shots * coffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void {
            console.log("데우고 있습니다");
        }

        private extract(shots: number): CoffeeCup {
            console.log(`${shots}개의 샷을 내리고 있습니다~`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    
    const maker: coffeeMachine = coffeeMachine.makeMachine(32);
}