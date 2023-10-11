// 泛型

function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a', 'b']);  // 指定类型调用
log(['a', 'b'])     // ts 类型推断调用


// 使用类型别名调用泛型类型
type Log = <T>(value: T) => T
let myLog: Log = log;


// 泛型接口

interface LogGenerics {
    <T>(value: T): T;       // 泛型仅仅约束一个函数
}

interface LogGenerics2<T> {
    (value: T): T;       // 泛型约束其它成员
}

let myLog2: LogGenerics2<number> = log;
myLog2(2);

let myLog3: LogGenerics = log;
myLog3("1");