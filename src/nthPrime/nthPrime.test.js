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

test("nthPrime",{ timeout: 1000000 },async ()=>{
    const nthPrime = (target) => {
        let primeCount = 1;
        let current = 2;

        return new Promise((resolve) => {
            const fn = () => {
                if(target === primeCount) {
                    resolve(current);
                }
                else {
                    if(current === 2) current++;
                    else current+= 2
                    if(isPrime(current)) primeCount++;
                    setTimeout(() => {
                        fn()
                    },0)
                }
            }
            fn()
        })
    }

    // expect(await nthPrime(1)).toBe(2)
    // expect(await nthPrime(2)).toBe(3)
    // expect(await nthPrime(3)).toBe(5)
    // expect(await nthPrime(20)).toBe(71)
    expect(await nthPrime(500000)).toBe(7368787)
    expect(await nthPrime(1000000)).toBe(15485863)
})

test("nthPrime generator", {timeout: 100000}, async ()=>{
    //Use Generator to find nth prime number and do not blocking main thread(try not to use worker)
    async function* nthPrimeGen(num) {
        let target = num;
        let current = 2;
        let primeCount = 1;

        while (true) {
            target = yield new Promise((resolve) => {
                const fn = () => {
                    if(target === primeCount) {
                        resolve(current)
                    } else {
                        if (current === 2) current++
                        else current+=2;
                        if(isPrime(current)) primeCount++;
                        setTimeout(()=>{
                            fn()
                        },0)
                    }
                }
                fn()
            })
        }
    }

    const gen = nthPrimeGen(1);
    expect(await gen.next()).toEqual({value:2, done: false});
    expect(await gen.next(500)).toEqual({value:3571, done: false});
    // expect(await gen.next(1000)).toEqual({value:7919, done: false});
    // expect(await gen.next(1000000)).toEqual({value:15485863, done: false});
    // // expect(await gen.next({done: true})).toEqual({value:undefined, done: true});
    //
    // //nice to have: pre-compute nthPrime(204) right after requested nthPrime(203) in background, so that boost next response
    // expect(await gen.next(500)).toEqual({value:3571, done: false});
    // expect(await gen.next(501)).toEqual({value:3581, done: false});
    // expect(await gen.next(1000)).toEqual({value:7919, done: false});
})
