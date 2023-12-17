import {describe, test, expect} from "vitest";
import {curry} from "./curry.js";

function sum(a, b, c) {
    return a + b + c;
}

test("case 1: ", () => {
    const csum = curry(sum);
    expect(csum(1, 2, 3)).toBe(6);
});
