// Array-like-object
// function sum(a:number,b:number,c:number):void{
//     let args:{
//         [index:number]:number;
//         length:number;
//         callee:Function;
//     } = arguments
//     console.log(args)
// }
// sum(1,2,3)
// 剩余参数§
function push(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(rest);
}
push([1, 2], 3, 4, 5);
