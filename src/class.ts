class Dog{
    // private constructor(name:string) {  // 给构造函数加private，表示这个类既不能被实例化，也不能被继承
    //     // this.name = name;
    // }
    // protected constructor(name:string) {  // 给构造函数加private，表示这个类不能被实例化，只能被继承
    //     // this.name = name;
    // }
    constructor(name:string) {
        // this.name = name;
    }
    name?: string;
    public name2?: string;  // 默认public省略，对所有人可见
            // 私有成员，只能在类本身调用，不能被类的实例调用，也不能被子类调用
    run() {}

    private pri() {}

    protected pro() {}  // 受保护只能在类或子类中访问，而不能在类的实例中访问
    readonly legs: number = 4 // 只读，必须要初始化

    static food: string = "bones"   // 静态，只能通过类名来调用，不能通过子类和实例来调用

}
// 类成员的属性都是实例属性，而不是原型属性；
// 类成员的方法都是原型方法
console.log(Dog.prototype)
let dog = new Dog("wang wang");
console.log(dog)
// dog.pri();
// console.log(dog.pro())
console.log(Dog.food)

// 继承
class Husky extends Dog {
    // constructor(name:string, color:string) {
    constructor(name:string, public color:string) {     // 这里加public，直接把color变成实例属性，相当于在下面加
        // 派生类的构造函数，必须包含super调用，es6的强制规定
        super(name);
        this.color = color;  // this 一定要在super调用之后调用
        this.pro()
        // this.pri()
    }

    // color: string;

}
