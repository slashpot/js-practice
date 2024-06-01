import {argsCount} from "./argsCount.js";
import {expect, test} from "vitest";

test('argsCount', async () => {
    expect(argsCount()).toBe(0)
    expect(argsCount(2)()).toBe(1)
    expect(argsCount(3)(4)()).toBe(2)
    expect(argsCount(5,6,7)()).toBe(3)
    expect(argsCount(1)(2,3)(4)()).toBe(4)
})

