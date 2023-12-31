import {test, expect} from "vitest";

type ThrottleFunction<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
    func: ThrottleFunction<T>,
    wait: number,
): ThrottleFunction<T> {
    let shouldThrottle = false;

    return function(this: any, ...args: T) {
        if(shouldThrottle) return;
        shouldThrottle = true;
        setTimeout(()=>{
            shouldThrottle = false;
        }, wait)
        func.apply(this, args);
    };
}

test('throttles delayed invocations', () => {
    let i = 0;
    const increment = throttle(() => {
        i++;
    }, 100);

    expect(i).toBe(0);
    increment();
    expect(i).toBe(1);

    setTimeout(() => {
        increment();
        expect(i).toBe(1);
    }, 25);

    setTimeout(() => {
        increment();
        expect(i).toBe(1);
    }, 50);
});