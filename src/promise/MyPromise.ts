
export class MyPromise {
    private onFulfilled: ((fulfilled: any) => void) | undefined
    private onRejected: ((rejected: any) => void) | undefined;

    constructor(callback: (resolve: (resolved?: any) => void, reject: (rejected?: any) => void) => void) {
        const resolve = (resolved?: any ) => {
            this.onFulfilled?.(resolved)
        }

        const reject = (rejected: any) => {
            this.onRejected?.(rejected)
        }

        try {
            callback(resolve, reject)
        } catch (e) {

        }
    }

    then(onFulfilled: (fulfilled: any) => void, onRejected?: (rejected: any) => void) {
        this.onFulfilled=onFulfilled;
        this.onRejected = onRejected
    }
}

