import {describe, it, expect} from "vitest";
import {MyPromise} from "./MyPromise.js";

describe('promise implementation' , () => {
    it('should execute callback when create Promise', () => {
        let val = 0;
        new MyPromise((resolve, reject) => {
            val++;
        })
        expect(val).toBe(1)
    })
})