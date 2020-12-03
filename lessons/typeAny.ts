//任意值（Any）用来表示允许赋值为任意类型。
//如果是一个普通类型，在赋值过程中改变类型是不被允许的
//但如果是 any 类型，则允许被赋值为任意类型

let myFavoriteNumber:any = 'seven';
myFavoriteNumber = 7;

//在任意值上访问任何属性都是允许的：
let anyTing:any = 'hello';
console.log(anyTing.myName);
console.log(anyTing.myName.firstName);
//也允许调用任何方法：
anyTing.setName('Jerry');
anyTing.setName("Jerry").sayHello();
anyTing.myName.setFirstName('Cat');
//可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：