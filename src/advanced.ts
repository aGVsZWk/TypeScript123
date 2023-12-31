// 基础类型的推断
let a;
let aa = 1;
let b = [1, null];

let c = (x = 1) => {

};


// 基于上下文的类型推断
window.onkeydown = (event) => {
    // console.log(event.button)
};


// 类型断言
interface Foo {
    bar: number
}

let foo = {} as Foo;
foo.bar = 1;

let foo2: Foo = {
    bar: 1
};



// X 兼容 Y: X(目标类型) = Y(源类型)
interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let xx: X = {a: 1, b: 2}
let yy: Y = {a: 1, b: 2, c: 3}
// 成员少的兼容成员多的,貌似不适用了
// xx = yy
// yy = xx


// 函数兼容性
type Handler = (a:number, b: number) => void

function hof(handler: Handler) {
    return handler
}

// 1. 参数个数
let handler1 = (a:number) => {}
hof(handler1)
let handler2 = (a:number, b:number, c:number) => {}
// hof(handler2)  // 参数少可以，参数多不行

// 可选参数和剩余参数
let aaa = (p1:number, p2:number) => {}
let bbb = (p1:number, p2?:number) => {}
let ccc = (...args: number[]) => {}

aaa = bbb
aaa = ccc
bbb = ccc
bbb = aaa
ccc = aaa
ccc = bbb

// 2. 参数类型
let handler3 = (a: string) => {

};
// hof(handler3)

interface Point3d {
    x: number;
    y: number;
    z: number;
}

interface Point2d {
    x: number;
    y: number;
}

let p3d = (point: Point3d) => {};
let p2d = (point: Point2d) => {};
p3d = p2d;
// p2d = p3d;
// 与接口相反，接口要求成员少的兼容成员多的，函数要求成员多的兼容成员少的。可通过strictFunctionTypes控制

// 3. 返回值类型
let f = () => ({name: "Alice"});
let g = () => ({name: "Alice", location: "Beijing"});
// f = g           // 成员少的兼容成员多的
// g = f

// 函数的重载
// function overload(a:number, b:number): number;
// function overload(a:string, b:string): string;
// function overload(a: any, b:any, c:any): any;


// 枚举兼容性
enum Fruit {Apple, Banana,}
enum Color {Red, Yellow,}

// let fruit = Fruit.Apple = 3;
let no:number = Fruit.Apple
// let color: Color.Red = Fruit.Apple;

// 类兼容性(静态成员和构造函数不参与比较)
class CA {
    constructor(p: number, q: number) {
    }
    private name: string = ""
    id: number = 1
}

class CB {
    static s = 1
    constructor(p: number) {
    }
    id: number = 2
}

let ac1 = new CA(1, 2);
let ac2 = new CB(1);
// ac1 = ac2;
ac2 = ac1;


class CC extends CA {

}

let cc = new CC(1, 2);
// aa = ac1;
cc = ac1

// 泛型兼容性
interface Empty<T> {
    // value: T        // 只有类型成员T被使用时才影响泛型兼容性，类也是如此
}

let theObj1: Empty<number> = {};
let theObj2: Empty<string> = {};
theObj1 = theObj2;

let lg1 = <T>(x: T): T => {
    console.log("x");
    return x;
};
let lg2 = <U>(y:U): U=> {
    console.log(y);
    return y;
}
lg1 = lg2;

// 兼容结论：
// 结构之间兼容，成员少的兼容成员多的
// 函数之间兼容：参数多个兼容参数少的



// 类型保护机制
enum Type {Strong, Week,}

class Java {
    helloJava() {
        console.log("Hello Java");
    }

    java: any;
}

class JavaScript{
    helloJavaScript() {
        console.log("Hello JavaScript");
    }

    javascript: any;
}

function getLanguage(type: Type) {
    let lang = type == Type.Strong ? new Java() : new JavaScript();
    if ((lang  as Java).helloJava) { // 必须加类型断言，不然不知道传入什么参数；代码不优雅
        (lang  as Java).helloJava();
    } else {
        (lang  as JavaScript).helloJavaScript();
    }
    return lang;
}

// 类型保护：TypeScript 能够在特定的区块中保证变量属于某种确定的类型
// 可在此区块中放心地引用此类型的属性，或者调用此类型的方法

// 4种方法
// 1. 使用 instanceof
function getLanguage1(type: Type) {
    let lang = type == Type.Strong ? new Java() : new JavaScript();
    if (lang instanceof Java) { // 必须加类型断言，不然不知道传入什么参数；代码不优雅
        lang.helloJava();
    } else {
        lang.helloJavaScript()
    }
    return lang;
}

// 2. 通过属性确认区块
function getLanguage2(type: Type) {
    let lang = type == Type.Strong ? new Java() : new JavaScript();
    if ('java' in lang) { // 必须加类型断言，不然不知道传入什么参数；代码不优雅
        lang.helloJava();
    } else {
        lang.helloJavaScript()
    }
    return lang;
}


// 3. typeof 类型保护
function getLanguage3(type: Type, x:string|number) {
    let lang = type == Type.Strong ? new Java() : new JavaScript();
    if (typeof x === "string") { // 必须加类型断言，不然不知道传入什么参数；代码不优雅
        x.length
    } else {
        x.toFixed(2)
    }
    return lang;
}


// 4. 创建类型保护函数来创建函数类型
function isJava(lang: Java | JavaScript): lang is Java {  // 类型位词
    return (lang as Java).helloJava !== undefined;
}

function getLanguage4(type: Type) {
    let lang = type == Type.Strong ? new Java() : new JavaScript();
    if (isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript()
    }
    return lang;
}