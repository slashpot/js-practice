import {expect, test} from "vitest";

export function argsCount(...params) {
    if(params.length === 0) return 0;
    let sum = params.length;

    const fn =  (...params2) => {
        if(params2.length === 0) {
            return sum;
        } else {
            sum+=params2.length;
            return fn;
        }
    };

    return fn
}

test('argsCount', async () => {
    expect(argsCount()).toBe(0)
    expect(argsCount(2)()).toBe(1)
    expect(argsCount(3)(4)()).toBe(2)
    expect(argsCount(5,6,7)()).toBe(3)
    expect(argsCount(1)(2,3)(4)()).toBe(4)
})


