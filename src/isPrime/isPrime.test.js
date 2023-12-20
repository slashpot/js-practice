import {test, expect} from "vitest";

test('isPrime case', () => {
    function isPrime(input) {
        if(input <= 1) return false;
        if(input % 2 === 0 && input > 2) return false;
        for (let i = 3, s = Math.sqrt(input); i<=s; i+=2) {
            if(s%i===0) {
                return false;
            }
        }
        return true;
    }
    expect(isPrime(0)).toBe(false)
    expect(isPrime(1)).toBe(false)
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(7368787)).toBe(true)
})