{
    type Video = {
        title: string;
        author: string;
    }

    type Optional<T> = {
        [P in keyof T]?: T[P];
        // T type에 있는 모든 key들은 순차적으로 P에 할당
        // P key는 option이고, 그 값에 type을 매핑해서 만들 수 있다.
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }

    type VideoOptional = Optional<Video>;

    type Animal = {
        name: string,
        type: string,
        age: number,
    };

    const animal: Optional<Animal> = {
        name: 'dog',
        type: 'mammals',
        age: 26,
    };

    animal.age = 28;

    const video: ReadOnly<Video> = {
        title: "taenams Video",
        author: "taenam",
    };

    type Nullable<T> = { [P in keyof T]: T[P] | null };

    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }
}