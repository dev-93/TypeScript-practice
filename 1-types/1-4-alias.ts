{
    // 타입 앨리어스: 새로운 타입을 정할 수 있다
    type Text = string;
    const name: Text = 'taenam';

    const address: Text = "korea";
    type Num = number;
    type Student = {
        name: string,
        age: number;
    }

    const student: Student = {
        name: 'dog',
        age: 29
    }

    // String Literal Types
    // 문자열도 타입으로 정의할 수 있다.
    type Name = "name";
    let taenam: Name;
    taenam = "name"

    type JSon = 'json';
    const json: JSon = "json";

    type Boal = true;
    const isSend: Boal = true;
    const isUp: Boal = false;

}