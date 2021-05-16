{
    // JS
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TS
    function add(num1:number, num2:number):number {
        return num1 + num2;
    }

    // JS
    function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TS
    function tsFetchNum(id:string): Promise<number> {
        // return 값은 promise이고, (숫자 형태)
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
}