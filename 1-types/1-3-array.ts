{
    // Array
    // 배열을 정의할때 두가지 방식이 있다.
    const fruits: string[] = ["tomato", "banana"];
    const scores: Array<number> = [1,2,3];

    // 주어진 데이터를 변경하고 싶지 않을 때, readonly 사용
    function printArray(fruits: readonly string[]) {}

    // Tuple => interface나 type alias, class로 대체해서 사용한다.
    // 배열이긴 배열인데 서로 다른 타입을 가질 수 있는 배열

    let student: [string, number];
    student = ["taenam", 29];
    student[0]; // taenam
    student[1]; // 29

    // tuple 사용 권장 X
    // 데이터 접근 할 때 인덱스처럼 접근하는게 가독성이 떨어진다.
    
    // object destructing을 이용하여, 가독성을 개선할 수 있다.
    const [name, age] = student;
}