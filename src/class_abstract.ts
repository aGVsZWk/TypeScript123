abstract class Animal {
    eat() {
        console.log("eat")
    }
    abstract sleep(): void      // 抽象方法，可以抽离一些共性，也实现多态；明确子类中有其他的实现
}


class Dog2 extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
    }

    name: string;

    run() {

    }

    sleep() {
    }
}

let dog2 = new Dog2("wangwangang");
dog2.eat();

class Cat extends Animal {
    sleep() {
        console.log("Can sleep");
    }
}

let cat = new Cat();
let animals: Animal[] = [dog2, cat]
animals.forEach(i => {
    i.sleep();
});

// this，链式调用
class WorkFlow {
    step1() {
        return this;
    }

    step2() {
        return this;
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}

new MyFlow().step1().next().step2().next();
