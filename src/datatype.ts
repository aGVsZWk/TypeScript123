// 原始类型
let bool: boolean = true;
let num: number = 123
let num2: number | undefined | null = 123;
let str: string = "abc";
// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: Array<number | string> = [1, 2, 3, "4"];

// 元组
let tuple: [number, string] = [0, "1"];
tuple.push(2);
console.log(tuple);

// 函数
let addxy = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (x, y) : number => x+y;
// 对象
let obj: object = {x: 1, y: 2};
let obj2: { x: number, y: number; } = {x: 1, y: 2};
obj2.x = 3;
// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 == s2);

// undefined, null
// undefined, null 是任何类型的子类，默认不允许赋值，在tsconfig.json中更改strictNullChecks后即可赋值
let un: undefined = undefined;  // 不能再被赋值
let nu: null = null;

s1 = nu;
num2 = un;

// void
let noReturn = () => {};


// any
let x;

// never
let error = () => {
    throw new Error("error");
};

let endless = () => {
    while (true) {
    }
};
