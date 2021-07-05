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