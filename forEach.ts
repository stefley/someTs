declare interface Array<T> {
    zFroEach(cb:(item: T, index: number, arr: Array<T>) => void, obj?: object ): any;
}

Array.prototype.zFroEach = function (cb) {
    let _arr = this;
    let _len = _arr.length;
    let _arg2 = arguments[1] || window;

    for(let i = 0; i < _len; i++) {
        cb.apply(_arg2, [_arr[i], i, _arr])
    }
}
