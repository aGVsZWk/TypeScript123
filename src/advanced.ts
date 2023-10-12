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

