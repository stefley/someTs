var tom = {
    name: 'tom',
    age: 8
};
var miki = {
    name: "miki"
};
var tok = {
    name: "tok",
    age: 8,
    gender: 'mael'
};
// let tom : Person3 = {
//     name:'tom',
//     gender:'male'
// }
// tom.id = 11;
// 报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值
// 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了
var tiy = {
    id: 3344,
    name: 'tiy'
};
var arr = ["str", 1, false];
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.blue);
