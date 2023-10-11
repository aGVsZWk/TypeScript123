/**
 * 对象的接口
 */

interface List {
    readonly id: number;  // 只读属性，不允许修改
    name: string;
    age?: number;   // 可选属性
}

interface Result {
    data: List[];
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
    })
}


let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'}
    ]
}
render({
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'}
    ]
} as Result);  // 类型断言

render(<Result>{
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'}
    ]
});  // 类型断言


// 可索引类型的接口
interface StringArray {
    [index:number]: string
}

let chars: StringArray = ['A', 'B']


interface Names {
    [x: string]: string;
    y: number;
    [z:number]: number;
}


/**
 * 函数类型的接口
 */

interface Add2 {
    (x: number, y: number): number;
}

type Add = (x:number, y:number) => number    // 类型别名

let add: Add = (a, b) => a + b

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}


function getLib() {
    let lib: Lib = (() => {}) as Lib;   // 类型断言
    lib.version = '1.0'
    lib.doSomething = () => {}
    return lib
}





