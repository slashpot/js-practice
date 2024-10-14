
export class MyPromise {
    private resolved: any

    constructor(callback: (resolve: (resolved?: any) => void, reject: (rejected?: any) => void) => void) {
        const resolve = (resolved?: any ) => {
            this.resolved = resolved
        }

        const reject = (rejected: any) => {

        }

        try {
            callback(resolve, reject)
        } catch (e) {

        }
    }

    then(onFulfilled: (fulfilled: any) => void, onRejected?: () => void) {
        onFulfilled(this.resolved)
    }
}

