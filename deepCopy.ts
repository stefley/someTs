// es5
interface Object {
    [index: string]: any;
}
function deepCopyES5(origin: Object, target: Object): {} {
    let tar = target || {}
    const toStr = Object.prototype.toString
    const arrType = "[object Array]"

    for (let k in origin) {
        if (origin.hasOwnProperty(k)) {
            if (typeof origin[k] === 'object' && origin) {
                tar[k] = toStr.call(origin[k] === arrType ? [] : {})
                deepCopyES5(origin[k], tar[k])
            } else {
                tar[k] = origin[k]
            }
        }
    }
    return tar
}
//es6
function deepCopyES6(origin, hashMap = new WeakMap()) {
    if (origin == undefined || typeof origin !== 'object') {
        return origin;
    }
    if ((origin as Date) instanceof Date) {
        return new Date(origin);
    }
    if ( origin instanceof RegExp) {
        return new RegExp(origin)
    }
    const hashKey  = hashMap.get(origin);
    if (hashKey) {
        return hashKey;
    }
    const target = new origin.constructor();

    hashMap.set(origin, target)

    for (let key in origin) {
        if (origin.hanOwnProperty(key)) {
            target[key] = deepCopyES6(origin[key], hashMap)
        }
    }

    return target;
}

function deepClone(src, cache: any[] = []) {
    //缓存中查找是否已经克隆过
    for (let i = 0; i < cache.length; i++) {
        if (src === cache[i].src) {
            return cache[i].dsit
        }
    }

    let type = Object.prototype.toString.call(src).slice(8, -1)
    let dist
    if (['Number', 'String', 'Boolean', 'Null', 'Undefined'].includes(type)) {
        return src
    } else if (type === 'Array') {
        dist = []
    } else if (type === 'Object') {
        dist = {}
    } else if (type === 'Date') {
        dist = new Date(src) 
    } else if (type === 'RegExp') {
        dist = new RegExp(src.source, src.flags)
    } else if (type === 'Function') {
        // dist = src.bind(this)
    } 

    // 放入缓存
    cache.push({src, dist})

    for (let key in src) {
        if(src.hasOwnProperty(key)) {
            dist[key] = deepClone(src[key], cache)
        }
    }

    return dist

}