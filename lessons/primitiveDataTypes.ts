// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
let isDone:boolean = false;
// 注意，使用构造函数 Boolean 创造的对象不是布尔值而是Boolean对象
let createdByNewBoolean:Boolean = new Boolean(1);

let decLiteral:number = 1;
let hexLiteral:number = 0xf00d;
//Es6 中的 二进制表示法
let binaryLiteral:number = 0b1010;
//Es6 中的 八进制表示法
let octalLitearal:number  = 0o744;

let notANumber:number = NaN;
let infinityNumber:number = Infinity;

let myName:string = 'jack';

//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName(): void {
    alert('My name is Tom');
}

//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unuseable: void = undefined;

//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
let n: null = null;
let u: undefined = undefined;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let num:number = undefined;
let u2:undefined;
let num2:number = u2;
