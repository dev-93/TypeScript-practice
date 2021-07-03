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

        public constructor(
            coffeeBeans:number,
            private milk:MilkFrother,
            private sugar: SugarProvider
        ) {
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
            console.log("커피를 데우고 있습니다");
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
            const sugarAddded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAddded);
        }
    }

    interface MilkFrother {
        makeMilk(cup:CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup:CoffeeCup): CoffeeCup;
    }

    // 싼 우유 거품기
    class CheapMilkSteamer implements MilkFrother {
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

    class FancyMilkSteamer implements MilkFrother {
        private steamMilk():void {
            console.log("고급 우유를 스팀하고 있습니다~~")
        }
        
        makeMilk(cup:CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother {
        private steamMilk():void {
            console.log("차가운 우유를 만들고 있습니다~~")
        }
        
        makeMilk(cup:CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 설탕 제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar() {
            console.log("사탕을 부셔서 설탕을 가져오고 있습니다.");
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

    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log("설탕병에서 설탕을 가져오고 있습니다.");
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

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    
    //sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    //
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
    
    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const SweetLatteMachine = new CoffeeMachine(
        12,
        cheapMilkMaker,
        candySugar
    );
   
    const machines: CoffeeMaker[] = [
        sweetCandyMachine,
        sweetMachine,
        latteMachine,
        coldLatteMachine,
        SweetLatteMachine,
    ];

    machines.forEach(machine => {
        console.log('-----------');
        machine.makeCoffee(1);
    })
}