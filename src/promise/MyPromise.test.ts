import {describe, it, expect} from "vitest";
import {MyPromise} from "./MyPromise.js";

describe('promise implementation' , () => {
    it('should execute callback when create Promise', () => {
        let val = 0;
        new MyPromise((resolve) => {
            val++;
            resolve()
        })
        expect(val).toBe(1)
    })

    it('should get promise when reject in callback', () => {
        const p = new MyPromise((_, reject) => {
            reject('rejected')
        })

        expect(p instanceof MyPromise).toBe(true)
    })

    it('should use then() to get resolved val' , () => {
        let val = 0;

        const p = new MyPromise((resolve) => {
            val++;
            resolve(val)
        })

        expect(val).toBe(1)

        p.then((x) => {
            expect(x).toBe(1)
        })

        const p2 = new MyPromise((resolve) => {
            val++;
            resolve()
        })

        p2.then((x) => {
            expect(x).toBe(undefined)
        })
    })

    it('should use then() to get resolved val using setTimeout' , () => {
        let val = 0;

        const p = new MyPromise((resolve) => {
            val++;
            setTimeout(() => {
                resolve(val)
            }, 1000)
        })

        expect(val).toBe(1)

        p.then((x) => {
            expect(x).toBe(1)
        })
    })
})