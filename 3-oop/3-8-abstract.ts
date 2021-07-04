{
    type CoffeeCup = {
        shots:number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans:number = 0;

        public constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
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
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("커피콩이 충분하지 않아!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void {
            console.log("데우고 있습니다");
        }

        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        public constructor(
            beans:number,
            public readonly serialNumber: string
        ) {
            super(beans);
        }

        private steamMilk():void {
            console.log("우유를 스팀하고 있습니다~~")
        }
        
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        private addSugar(): void {
            console.log("설탕을 넣고 있어요~~!");
        }

        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true,
            }
        }
    }
    
    const machines: CoffeeMaker[] = [
        new CafeLatteMachine(16, 's1'),
        new SweetCoffeeMaker(16),
        new CafeLatteMachine(16, 's2'),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach(machine => {
        console.log('-----------------------');
        machine.makeCoffee(2);
    })
}