// 交叉类型

interface DogInterface {
    run(): void;

}

interface CatInterface{
    jump(): void;
}

let pet:DogInterface & CatInterface = {
    run() {},
    jump() {}
}

// 联合类型
let a: number | string = 1;

// 字面量联合类型，限制取值在范围内
let b: 'a' | 'b' | 'c';
let c: 1 | 2 | 3;


// 类型不确定，只能访问公共成员
class Dog implements DogInterface {
    run() {};
    eat() {};

}

class Cat implements CatInterface {
    jump() {};
    eat() {};


}
enum Master {Boy, Girl,}

function getPet(master: Master) {
    let pet = master == Master.Boy ? new Dog() : new Cat();
    pet.eat();   // 只能访问公共成员
    // pet.run();

    return pet;
}




interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    r: number;
}

type Shape = Rectangle | Circle;

function area(s: Shape) {
    switch (s.kind) {
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.r ** 2;
        default :
            return (e:never) => {
                throw new Error(e);
            }
    }
}

area({kind: "circle", r: 1});



