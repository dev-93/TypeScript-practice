{
    type CoffeeCup = {
        shots:number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans:number = 0;

        public constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
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

    class CheapMilkSteamer {
        private steamMilk():void {
            console.log("우유를 스팀하고 있습니다~~")
        }
        
        makeMilk(cup:CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class AutomaticSugarMixer {
        private getSugar() {
            console.log("설탕을 한 스쿱 가져오고 있습니다.");
            return true;
        }

        addSugar(cup:CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        constructor(
            beans: number,
            public readonly serialNumber: string,
            private milkFrother: CheapMilkSteamer
        ) {
            super(beans);
        }
        private steamMilk():void {
            console.log("우유를 스팀하고 있습니다~~")
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(
            private beans:number,
            private sugar: AutomaticSugarMixer,
        ){
            super(beans)
        }
        getSugar() {
            console.log("")
        };

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    class SweetCaffeeLatteMachine extends CoffeeMachine {
        constructor(
            private beans:number,
            private sugar: AutomaticSugarMixer,
            private milkFrother: CheapMilkSteamer
        ) {
            super(beans)
        };

        makeSweetCaffeeLatte(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugarAddded = this.sugar.addSugar(coffee);
            return this.milkFrother.makeMilk(sugarAddded);
        }
    }
    
    // const machines: CoffeeMaker[] = [
    //     new CoffeeMachine(16),
    //     new CafeLatteMachine(16, 's1'),
    //     new SweetCoffeeMaker(16),
    //     new CoffeeMachine(16),
    //     new CafeLatteMachine(16, 's2'),
    //     new SweetCoffeeMaker(16),
    // ];

    // machines.forEach(machine => {
    //     console.log('-----------');
    //     machine.makeCoffee(1);
    // })
}