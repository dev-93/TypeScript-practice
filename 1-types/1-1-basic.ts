{
    /* 
    javascript
    primitive: number, string, boolean, bigint
    object: function, array...
    */

    // number
    const num:number = 100;

    // string
    const str:string = 'hello world';

    // boolean
    const boal:boolean = false;

    // undefined
    let age: number | undefined;
    age = undefined;
    age = 1;

    // null
    let person: null;
    let person2: string | null;

    // unknown
    // 리턴값을 모를 때 사용
    let norsure: unknown = 0;
    norsure = "he";
    norsure = true;

    // any
    // 어떤것이든 담을 수 있는 변수
    let anything: any = 0;
    anything = 'hello';

    // void (생략도 가능)
    // 아무 값도 리턴 하지 않을 때, 사용
    function print(): void {
        console.log("hello");
    }

    // never
    // 어플리케이션에서, 에러 발생 시 리턴 값이 없다.
    function throwError(message:string):never {
        throw new Error(message);
    };

    // object
    // 원시타입을 제외한 모든 object 타입을 명시할 수 있다.
    let obj:object;
    fucntion acceptObject(obj:object) {

    }
    acceptObject({name: 'taenam'});
    acceptObject({aniaml: "dog"})
}