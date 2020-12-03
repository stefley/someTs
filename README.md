# typescript 学习
1.TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错
2.TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
  如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。
3.JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
4.声明一个 void 类型的变量没有什么用，因为你只能将  它赋值为 undefined 和 null
5.变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：let myFavoriteNumber;
6.TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
7.注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：