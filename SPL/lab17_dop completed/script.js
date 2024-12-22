"use strict"

function fibonacci(n) {
    let values = [0, 1];
    if (n <= 1) return values[n];

    n -= 1;
    while (n != 0) {
        let savedValue = values[0] + values[1];
        values[0] = values[1]; values[1] = savedValue;
        n--;
    }

    console.log(values[1])
    return values[1];
}

async function fFib(n) {
    let myFirstPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(fibonacci(n)), 1000);
    })

    let answ = await myFirstPromise;
    console.log(answ);
}

setTimeout(fibonacci, 1000, 5)
fFib(10);
console.log("test") 