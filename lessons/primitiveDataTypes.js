"use strict";
// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
var isDone = false;
// 注意，使用构造函数 Boolean 创造的对象不是布尔值而是Boolean对象
var createdByNewBoolean = new Boolean(1);
var decLiteral = 1;
var hexLiteral = 0xf00d;
//Es6 中的 二进制表示法
var binaryLiteral = 10;
//Es6 中的 八进制表示法
var octalLitearal = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'jack';
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName() {
    alert('My name is Tom');
}
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
var unuseable = undefined;
//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
var n = null;
var u = undefined;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var num = undefined;
var u2;
var num2 = u2;
