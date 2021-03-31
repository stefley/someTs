// 仿写promise
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class ZPromise {
    // 状态  结果
    PromiseState = PENDING
    PromiseResult = undefined

    fulfilledCbs: any = []
    rejectedCbs: any = []
    constructor(executor: Function) {
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (err) {
            this.reject(err)            
        }
    }

    resolve (value: any) {
        if (this.PromiseState !== PENDING)  return
        this.PromiseState = FULFILLED
        this.PromiseResult = value
        while(this.fulfilledCbs.length) {
            this.fulfilledCbs.shift()()
        }
    }
    reject (reason: any) {
        if (this.PromiseState !== PENDING)  return
        this.PromiseState = REJECTED
        this.PromiseResult = reason
        while (this.rejectedCbs.length) {
            this.rejectedCbs.shift()()
        }
    }

    // then() 方法返回一个 Promise (en-US)。它最多需要有两个参数：Promise 的成功和失败情况的回调函数
    then (onFulfilled: any, onRejected: Function) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val: any) => val
        onRejected = typeof onRejected === 'function' ? onRejected : (reason: any) => { throw reason }
        const thenPromise = new ZPromise((resolve: Function, reject: Function) => {
            const resolvePromise = (cb: Function) => {
                const x = cb(this.PromiseResult)
                queueMicrotask(() => {
                    try {
                        if(x === thenPromise) {
                            throw new Error("can't return self")
                        }
                        if (x instanceof ZPromise) {
                            x.then(resolve,reject)
                            x.then((val: any) => resolvePromise(() => val), (reason: any) => resolvePromise(() => reason))
                        } else {
                            resolve(x)
                        }
                    } catch (error) {
                        reject(error)
                    }
                    
                })
            }
            if (this.PromiseState === FULFILLED) {
                resolvePromise(onFulfilled)
            } else if (this.PromiseState === REJECTED) {
                resolvePromise(onRejected)
            } else if (this.PromiseResult === PENDING) {
                this.fulfilledCbs.push(resolvePromise.bind(this, onFulfilled))
                this.rejectedCbs.push(resolvePromise.bind(this, onRejected))
            }
        })
    }
            
    static all (arr: any[]) {
        const result: any[] = []
        let count = 0
        return new ZPromise((resolve: Function, reject: Function) => {
            const addResultItme = (item:ZPromise, index: number) => {
                result[index] = item;
                count++
                if (count === arr.length) {
                    resolve(result)
                }
            }
            arr.forEach((item, index) => {
                if (item instanceof ZPromise) {
                    item.then((value:any) => {
                        addResultItme(value, index)
                    }, reject)
                } else {
                    addResultItme(item, index)
                }
            })
        })
    }

    static race(arr: any[]) {
        return new ZPromise((resolve: Function, reject: Function) => {
            arr.forEach((item, index) =>{
                if( item instanceof ZPromise) {
                    item.then(resolve, reject)
                } else {
                    queueMicrotask(() => {
                        resolve(item)
                    })
                }
            })
        })
    }

    static resolve (value: any) {
        if ( value instanceof ZPromise) return value
        return new ZPromise((resolve:Function) => resolve(value))
    }

    static reject (value: any) {
        return new ZPromise((resolve: Function, reject: Function) => {
            reject(value)
        })
    }

    finally (callback: any) {
        let x = typeof callback === 'function' ? callback() : callback
        return ZPromise.resolve(x).then(() => this, (reason:any) => { throw reason})
    }

    catch (onRejected: Function) {
        return this.then(null, onRejected)
    }
}