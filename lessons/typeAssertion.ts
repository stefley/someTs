// 类型断言（Type Assertion）可以用来手动指定一个值的类型
// 语法 值 as 类型 或 <类型>值
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型
//在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型
//故建议使用类型断言时，统一使用 值 as 类型 这样的语法

/** 
 * 类型断言的用途
 * 1.将一个联合类型断言为其中一个类型
 * 2.将一个父类断言为更加具体的子类
 * 3.将任何一个类型断言为 any
*/

interface Cat {
    name:string;
    run():void;
}
interface Fish {
    name:string;
    swim():void;
}

function getName(animal:Cat | Fish) {
    return animal.name;
}

//下面例子会报错  Cat不存在swim
// function isFish(animal:Cat|Fish) {
//     if(typeof animal.swim === 'function') {
//         return true;
//     }
//     return false;
// }

function isFish(animal:Cat | Fish) {
    if(typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

//当类之间有继承关系时，类型断言也是很常见的
class ApiError extends Error {
    code:number = 0;
}
class  HttpError extends Error {
    statusCode:number = 400;
}
function isApiError(error:Error) {
    if(typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

// 在这个例子中有一个更合适的方式来判断是不是 ApiError，那就是使用 instanceof
//使用 instanceof 更加合适，因为 ApiError 是一个 JavaScript 的类，能够通过 instanceof 来判断 error 是否是它的实例
function isApiError2(error:Error):boolean {
    if(error instanceof ApiError) {
        return true;
    }
    return false;
}

//有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface）
// ，接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了
interface IApirError extends Error {
    code:number;
}
interface IHttpError extends Error {
    code:number;
}
function isApiError3(error:Error):boolean {
    if(typeof (error as IApirError).code === 'number') {
        return true;
    }
    return false;
}

//window 上不存在 foo 属性,此时我们可以使用 as any 临时将 window 断言为 any 类型
(window as any).foo = 1;
//历史遗留的代码中有个 getCacheData，它的返回值是 any
function getCacheData(key:string):any {
    return (window as any).cache[key];
}
//那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作
interface Dog {
    name:string;
    run():void;
}
const Poly = getCacheData('tom') as Dog;
Poly.run();

//要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
//所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 as 语法更加优雅