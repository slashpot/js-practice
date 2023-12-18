
import {test, expect} from "vitest";
test('batch: ',async()=>{
    let executeCount = 0;
    const batch = (func) => {
        return async function(...args){
            while(executeCount === 1) {
                await delay(100)
            }
            const output = func.apply(this,args);
            executeCount = 0;
            return output;
        }
    };

    function delay(num) {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve();
            },num);
        })
    }

    const batchedFunc = batch((nums) => {
        executeCount++;
        return nums.map((x) => x * 2);
    });

    const [r1, r2, r3] = await Promise.all([
        batchedFunc([1, 2, 3]),
        batchedFunc([4, 5]),
        batchedFunc([6, 7, 8, 9]),
    ]);

    expect(executeCount).toBe(1);
    expect(r1).toEqual([2,4,6])
    expect(r2).toEqual([8,10])
    expect(r3).toEqual([12,14,16,18])
})