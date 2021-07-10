{
    const obj = {
        name: "taenam",
    };

    obj.name; // taenam
    obj['name']; // taenam

    type Animal = {
        name: string;
        age: number;
        gender: "male" | "female";
    }

    type Name = Animal['name']; // string
    // const inValidType: Name = 12 Error, string type이 들어가야 하는데, number type이 들어가서 
    const text:Name = "hello";

    type Gender = Animal['gender']; // 'male' | 'female'
    
    type Keys = keyof Animal; // 'name' | 'age' | 'gender' 
    const key:Keys = 'gender';
    // const invalidKey:Keys = "height"

    type Person = {
        name: string;
        gender: Animal['gender'];
    };

    const person:Person = {
        name: "taenam",
        gender: 'male',
    }
} 