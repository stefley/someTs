// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
//在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
interface Person {
    name:string;
    age:number;
}
let tom:Person  = {
    name:'tom',
    age:8
}

//有时我们希望不要完全匹配一个形状，那么可以用可选属性：
interface Animal {
    name:string;
    age?:number;
}
let miki:Animal = {
    name:"miki"
}

//有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
interface Person2 {
    name:string;
    age?:number;
    [type:string]:any;
}
let tok:Person2 = {
    name:"tok",
    age:8,
    gender:'mael'
}
//注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
interface Person3 {
    readonly id:number;
    age?:number;
    [proName:string]:any;
}
// let tom : Person3 = {
//     name:'tom',
//     gender:'male'
// }
// tom.id = 11;
// 报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值
// 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了

let tiy:Person3 = {
    id:3344,
    name:'tiy'
}

let arr:[string,number,boolean] = ["str",1,false]

enum Flag { success=1,error=-1}
let f:Flag = Flag.success;
enum Color {red='red',blue='blue'}
console.log(Color.blue)