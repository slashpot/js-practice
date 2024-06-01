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

// console.log(argsCount()); // return 0;
// console.log(argsCount(2)()); // return 1;
// console.log(argsCount(3)(4)()); // return 2;
// console.log(argsCount(5, 6, 7)()); // return 3;
// console.log(argsCount(1)(2, 3)(4)()); // return 4;
// console.log(argsCount(1)); // return a function
