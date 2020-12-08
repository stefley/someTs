// 接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述,，对类的一部分行为进行抽象

//类实现接口
// 实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，
// 有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性
interface Alarm {
    alert(): void;
}

class Door {}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
// 一个类可以实现多个接口：
interface Light {
    lightOn(): void;
    lightOff(): void;
}
class Car2 implements Alarm,Light {
    alert() {
        console.log('Cart2 alert');
    }
    lightOff() {
        console.log('Car2 light on');
    }
    lightOn() {
        console.log('Car2 light off');
    }
}

// 接口继承接口
interface Alarm2 {
    alert(): void;
}
interface LightableAlarm extends Alarm2 {
    lightOn(): void;
    lightOff(): void;
}

//接口继承类
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };

function printPoint(p: Point):void {
    console.log(p.x,p.y);
}
printPoint(new Point(2,3));

// 声明 Point2 类时创建的 Point2 类型只包含其中的实例属性和实例方法
class Point2 {
    /* 静态属性，坐标系原点 */
    static origin = new Point(0,0);
    /* 静态方法，计算与原点的距离 */
    static distanceToOrigin(p: Point) {
        return Math.sqrt(p.x*p.x+p.y*p.y);
    }
    /* 实例属性，x轴的值 */
    x: number;
    /* 实例属性，y轴的值 */
    y: number;
    /* 构造函数 */
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    /* 实例方法，打印此点 */
    printPoint():void {
        console.log(this.x,this.y);
    }
}
interface Point2InstanceType {
    x: number;
    y: number;
    printPoint(): void;
}
// 在接口继承类的时候，也只会继承它的实例属性和实例方法