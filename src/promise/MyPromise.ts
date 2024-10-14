
export class MyPromise {
    private onFulfilled: ((fulfilled: any) => void) | undefined

    constructor(callback: (resolve: (resolved?: any) => void, reject: (rejected?: any) => void) => void) {
        const resolve = (resolved?: any ) => {
            this.onFulfilled?.(resolved)
        }

        const reject = (rejected: any) => {

        }

        try {
            callback(resolve, reject)
        } catch (e) {

        }
    }

    then(onFulfilled: (fulfilled: any) => void, onRejected?: () => void) {
        this.onFulfilled=onFulfilled
    }
}

