// 数字枚举

enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}


console.log(Role.Reporter);     // int类型，初始值为0
console.log(Role);      // 对象

// 字符串美剧
enum Message {
    Success = "恭喜你，成功了",
    Fail = "抱歉，失败了",
}

// 异构枚举(混用类型，不建议用)
enum Answer {
    N,
    Y = "Yes",
}


// 枚举成员
// Role.Reporter = 2;  // 只读类型，无法修改
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    d = Math.random(),
    e = "123".length,
}

// 常量枚举（编译后代码会被移除；作用：不需要一个对象而需要对象的值）
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb];



// 枚举类型
// NOTE 有过期的错误内容
enum E {a, b}
enum F {a = 0, b = 1,}
enum G {a = "apple", b = "banana",}


// 可把任意number赋值给枚举类型(X)
// let e: E = 3;
// let f: F = 3;
// let g: G = 4;
// e === f 两种不同枚举类型是不可以进行比较的


// let e1: E.a = 1;
let e2: E.b;
// e1 === e2;
// let e3: E.a = 1;
// console.log(e1 === e3);

let g1: G = G.b
let g2: G.a = G.a;      // 字符串枚举，类型只能是枚举成员的类型
