//类型别名常用于联合类型
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameOrResolver;
function getName(n: NameOrResolver): Name {
    if( typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

//字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something....
}
handleEvent(document.getElementById('root'),'scroll'); // ok
handleEvent(document.getElementById('root'),'dbclick'); //error
