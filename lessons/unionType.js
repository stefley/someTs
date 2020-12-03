"use strict";
//联合类型（Union Types）表示取值可以为多种类型中的一种。
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//联合类型使用 | 分隔每个类型
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// function getLength(something: string | number): number {
//     return something.length;
// }
// 上例中，length 不是 string 和 number 的共有属性，所以会报错。
// 访问 string 和 number 的共有属性是没问题的：
function getLength(something) {
    return something.toString();
}
//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
var myFavoriteNumber2;
myFavoriteNumber2 = 'seven';
console.log(myFavoriteNumber2.length); //5
myFavoriteNumber2 = 7;
// console.log(myFavoriteNumber2.length)  编译时报错
