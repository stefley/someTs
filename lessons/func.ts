function run():string {
    return 'run'
}

let run2 = function():number {
    return 2;
}

function getInfo(name:string,age:number):string {
    return `${name} ---- ${age}`;
}

function run3():void {
    console.log('run')
}

//可选参数  可选参数必须在参数最后
function getInfo2(name:string,age?:number):string{
    if(age) {
        return `${name} -- ${age}`
    } else {
        return `${name}`
    }
}

//剩余参数
function sum(...params:number[]) : number {
    let sum = 0;
    for(let i =0;i<params.length;i++){
        sum+=params[i]
    }
    return sum;
}


//函数重载
function getInfo3(name:string):string;
function getInfo3(age:number):number;

function getInfo3(str:any):any{
    if(typeof str === 'string') {
        return "str"
    } else {
        return 1
    }
}

let mySubm:(x:number,y:number) => number = function(x:number,y:number):number{
    return x+y;
}

//用接口定义函数的形状
interface SearchFunc {
    (source:string,subString:string):boolean;
}
let mySearch:SearchFunc;
mySearch = function(source:string,subString:string):boolean {
    return source.search(subString) !== -1;
}