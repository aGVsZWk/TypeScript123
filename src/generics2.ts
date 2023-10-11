class GLog<T> {
    run(value: T) {
        console.log(value);
        return value;
    }
}


let log1 = new GLog<number>();
log1.run(1);
let log2 = new GLog();
log2.run({});
log2.run("aaa");


// 泛型类型约束
interface Length {
    length: number;
}
// 给泛型增加类型约束，就不能什么类型都传了
function logg<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}

logg([1]);
logg("123");
logg({length: 1})

