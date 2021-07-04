{
    function checkNotNullBad(arg: number | null): number {
        if(arg == null) {
            throw new Error("not Valid number");
        }
        return arg;
    }

    function checkNotNullAnyBad(arg: any | null): any {
        if(arg == null) {
            throw new Error("not Valid number");
        }
        return arg;

        const result = checkNotNullAnyBad(123);
        // 타입에 대한 정보가 없기 때문에, 타입이 안전하지가 않다.
    }
}

{
	function checkNotNull<T>(arg: T | null): T {
        // generic을 쓰게 된다면,
        // 어떤 타입이던간에 받을 수 있고, 코딩할때, 타입이 결정되기 때문에 타입을 보장받을 수 있다.
        // 함수에서 쓰는 방법
        if(arg == null) {
            throw new Error("not Valid number");
        }
        return arg;
	}

    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}