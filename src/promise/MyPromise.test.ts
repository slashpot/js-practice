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
})