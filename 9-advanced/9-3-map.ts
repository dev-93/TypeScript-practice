{
    type Video = {
        title: string;
        author: string;
        description: string;
    }

    type Optional<T> = {
        [P in keyof T]?: T[P] // for..in처럼 key를 도는것과 같다.
        // P 라는 것은 T 타입의 모든 key들 중에 하나이다.
        // T object안에 있는 key를 이용해서 value를 정의할 수 있다.
    }

    type VideoOptional = Optional<Video>;
    // Optional에 전달된 Video의 key들을 돈다.
    const temp:VideoOptional = {
        title: "today feeling",
    }; 

    type Animal = {
        name: string,
        type: string,
        age: number,
    };

    const animal: Optional<Animal> = {
        name: 'dog',
        type: 'mammals',
        age: 26,
    }

    console.log(animal);
}