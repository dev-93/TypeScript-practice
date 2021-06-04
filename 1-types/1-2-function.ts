{
    // // JS
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TS
    // function add(num1:number, num2:number):number {
    //     return num1 + num2;
    // }

    // // JS
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TS
    // function tsFetchNum(id:string): Promise<number> {
    //     // return 값은 promise이고, (숫자 형태)
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    //함수 활용할 수 있는 팁
    // JS => TS
    // 최신 JS 문법은 JS도 쓸 수 있고, TS에서도 사용할 수 있는 타입이 더해진 함수정의 방법

    // 1. Optional Parameter
    function printName(firstName:string, lastName?:string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName("taenam", "KIM");
    printName("jihun");
    printName("jihun", undefined);
    // 위에 예제서는 인자 2개를 받아야하기 때문에 에러를 발생한다.
    // 두번째 인자가 선택사항이 되게 하려면 Optional parameter 이용해야한다.
    // Optional parameter(?)를 이용해서 두번째 인자에 적용하게 되면 이전 오류가 사라진다.


    // Default parameter
    // 아무것도 전하지 않아도 기본 값으로 설정된다.
    function printMessage(message: string = "default Message") {
        console.log(message);
    };

    printMessage();

    // Rest parameter
    // 숫자 타입의 배열, number[] 로 표현
    // 전달되는 모든 파라미터들: ...(배열 변수명)
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a + b);
    };

    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3));
    console.log(addNumbers(1,2,3,4));
}