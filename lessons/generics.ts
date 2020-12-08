// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

/* function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
} */
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for(let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray<String>(3,'x'); // ['x', 'x', 'x']
// 在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了
// 在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来 createArray(3, 'x')

// 定义泛型的时候，可以一次定义多个类型参数:
function swap<T,U>(tuple: [T,U]): [U,T] {
    return [tuple[1],tuple[0]];
}
swap([8,'xx']); //['xx',8]

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
/* function loggingIdentity<T>(arg:T): T {
    console.log(arg.length);
    return arg;
}
上例中，泛型 T 不一定包含属性 length，所以编译的时候报错了。

这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束： */
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 多个类型参数之间也可以互相约束：
function copyFields<T extends U, U>(target: T, source: U): T {
    for(let id in source) {
        target[id] = (<T>source)[id]
    }
    return target;
}
let x = { a:1, b:2, c:3, d:4 };
copyFields(x,{ b:10, d:20 });
console.log(x); //{ a: 1, b: 10, c: 3, d: 20 }

//  <T>source 就是 source as T，把 source 断言成 T 类型

// 泛型接口

interface CreateArrayFunc {
    <T>(length: number, value: T): Array:<T>;
}
let createArray2: CreateArrayFunc;
createArray2 = function<T>(length:number,value:T): Array<T> {
    let result: T[] = [];
    for( let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray2(3,'y');
// 进一步，我们可以把泛型参数提前到接口名上：
interface CreateArrayFunc2 <T> {
    (length: number, value: T): Array<T>;
}
let createArray3: CreateArrayFunc2<any>;
createArray3 = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for( let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

// 泛型类§
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型参数的默认类型§
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for( let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}