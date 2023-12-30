import { test, expect } from 'vitest'

function isPrime(input) {
    if(input === 1) return false;
    if(input === 2) return true;
    if(input > 2 && input % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(input); i+=2) {
        if(input % i === 0) return false
    }

    return true;
}

test("nthPrime",async ()=>{

    let count = 2;
    let cur = 3;

    async function nthPrime(input) {
        if(input === 1) return 2;
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

test("nthPrime generator",async ()=>{
    let count = 2;
    let cur = 3;

    async function* nthPrimeGen(input) {
        if(input === undefined || input === 1) {
            input = yield 2;
        }
        while (true) {
            cur+=2;
            if(isPrime(cur)) {
                count++;
                if(count===input) {
                    input = yield cur
                    if(input.done) return;
                }
            }
        }
    }

    //Use Generator to find nth prime number and do not blocking main thread(try not to use worker)
    const gen = nthPrimeGen(1);
    expect(await gen.next()).toEqual({value:2, done: false});
    expect(await gen.next(500)).toEqual({value:3571, done: false});
    expect(await gen.next(1000)).toEqual({value:7919, done: false});
    expect(await gen.next(1000000)).toEqual({value:15485863, done: false});
    expect(await gen.next({done: true})).toEqual({value:undefined, done: true});

    //nice to have: pre-compute nthPrime(204) right after requested nthPrime(203) in background, so that boost next response
    // expect(await gen.next(500)).toEqual({value:3571, done: false});
    // expect(await gen.next(501)).toEqual({value:3581, done: false});
    // expect(await gen.next(1000)).toEqual({value:7919, done: false});
})
