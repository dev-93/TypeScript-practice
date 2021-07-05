type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

// 공통점
// 1. object를 정의하고, 타입을 할당할 수 있다.

const typeObj: PositionType = {
    x: 1,
    y: 2,
}

const interfaceObj: PositionInterface = {
    x: 3,
    y: 4,
}

// 2. class에서 구현이 가능하다.

class TypeClass implements PositionType {
    x: number;
    y: number;
}

class InterfaceClass implements PositionInterface {
    x: number;
    y: number;
}

// 3. extends 가능하다.

interface ZPositionInterface extends PositionInterface {
    z: number;
}

type ZPositionType = PositionType & { z: number } ;

// 차이점
// 1. interface만 결합이 된다.
// 예를들어, 똑같은 interface의 name을 사용할 수 있다.

interface PositionInterface {
    x: number;
    y: number;
}

interface PositionInterface {
    z: number;
}

// type PositionType {} // error

// 2. Type aliases 

type Person = {
    name: string,
    age: number,
};

type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'top';