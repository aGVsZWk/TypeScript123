interface Human {
    name: string;

    eat(): void;
}


class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {}
    sleep() {       // 类实现接口必须实现接口中声明的所有属性；类可以定义自己的属性;  接口只能约束类的公有成员，接口也不能约束类的构造函数
    }
}

// 接口可以像类一样相互继承
interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}

interface Boy extends Man, Child {   // 接口继承接口

}

let boy: Boy = {
    name: '',
    run() {
    },
    eat() {
    },
    cry() {

    }
}


// 接口继承类
class Auto {
    state = 1
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state = 2;
}

// Auto 子类 也可以实现这个接口
class Bus extends Auto implements AutoInterface {

}