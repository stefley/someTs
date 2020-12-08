// 枚举（Enum）类型用于取值被限定在一定范围内的场景，如一周7天
enum Week {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(Week['Sun'] === 0); //true
console.log(Week['Mon'] === 1); //true
console.log(Week['Tue'] === 2); //true
console.log(Week['Wed'] === 3); //true

console.log(Week[0] === 'Sun'); //true
console.log(Week[1] === 'Mon'); //true
console.log(Week[2] === 'Tue'); //true
console.log(Week[3] === 'Wed'); //true

//手动赋值
// 我们也可以给枚举项手动赋值:
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days['Sun'] === 7); //true
console.log(Days['Mon'] === 1); //true
console.log(Days['Tue'] === 2); //true
console.log(Days['Sat'] === 6); //true
// 未手动赋值的枚举项会接着上一个枚举项递增。