import { test, expect } from 'vitest'

test("nthPrime",async ()=>{
    function isPrime(input) {
        if(input === 1) return false;
        if(input === 2) return true;
        if(input > 2 && input % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(input); i+=2) {
            if(input % i === 0) return false
        }

        return true;
    }
    async function nthPrime(input) {
        if(input === 1) return 2;
        let count = 2;
        let cur = 3;
        while (count !== input) {
            cur+=2;
            if(isPrime(cur)){
                count++
            }
        }
        return cur;
    }
    expect(await nthPrime(1)).toBe(2)
    expect(await nthPrime(2)).toBe(3)
    expect(await nthPrime(3)).toBe(5)
    expect(await nthPrime(20)).toBe(71)
    expect(await nthPrime(500000)).toBe(7368787)
    expect(await nthPrime(1000000)).toBe(15485863)
})