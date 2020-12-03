/*
 export const name:string;
export function getName():string;
export class Animal {
    constructor(name:string);
    sayHi():string;
}
export enum Directions {
    Up,
    Down,
    Left,
    Right
}
export interface Options {
    data:any;
} 
*/

//等价上边的声明
declare const name:string;
declare function getName():string;
declare class Animal {
    constructor(name:string);
    sayHi():string;
}
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
interface Options {
    data:any;
}

export { name, getName, Animal, Directions, Options }

//====================================================
//与 declare namespace 类似，export namespace 用来导出一个拥有子属性的对象
export namespace foo {
    const name:string;
    namespace bar {
        function baz():string;
    }
}

//src/index.ts
import { foo } from 'foo'
console.log(foo.name)
foo.bar.baz();

//======================================================
// 在 ES6 模块系统中，使用 export default 可以导出一个默认值，
// 使用方可以用 import foo from 'foo' 而不是 import { foo } from 'foo' 来导入这个默认值
//在类型声明文件中，export default 用来导出默认值的类型
export default function foo():string;
// 注意，只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出
//针对这种默认导出，我们一般会将导出语句放在整个声明文件的最前面
export default Directions2;
declare enum Ditections2 {
    Up,
    Down
}

//src/index.ts
import foo from 'foo'
foo();

//======================================================================

//在 commonjs 规范中，我们用以下方式来导出一个模块
//整体导出
module.exports = foo;
//单个导出 
exports.bar2 = bar2;
//在 ts 中，针对这种模块导出，有多种方式可以导入
//整体导入 require
const foo = require('foo');
//单个导入 require
const bar2 = require('foo').bar2;
//整体导入 import
import * as foo from 'foo';
//单个导入 import
import { bar2 } from 'foo'
//整体导入 require import
import foo = require('foo');
//单体导入 require import
import bar2 = foo.bar;

//对于这种使用 commonjs 规范的库，假如要为它写类型声明文件的话，就需要使用到 export = 这种语法了
export = foo;
declare function foo():string;
declare namespace foo {
    const bar2:number;
}
//需要注意的是，上例中使用了 export = 之后，就不能再单个导出 export { bar } 了
//所以通过声明合并，使用 declare namespace foo 来将 bar 合并到 foo 里

//==================================================================

//UMD库
// 既可以通过 <script> 标签引入，又可以通过 import 导入的库，称为 UMD 库。相比于 npm 包的类型声明文件，
// 我们需要额外声明一个全局变量，为了实现这种方式，ts 提供了一个新语法 export as namespace

//一般使用 export as namespace 时，都是先有了 npm 包的声明文件，再基于它添加一条 export as namespace 语句
// ，即可将声明好的一个变量声明为全局变量，举例如下
export as namespace foo;
export = foo;

declare function foo():string;
declare namespace foo {
    const bar:number;
}
//当然它也可以与 export default 一起使用
export as namespace foo;
export default foo;

declare function foo():string;
declare namespace foo {
    const bar:number;
}

//====================================================================

