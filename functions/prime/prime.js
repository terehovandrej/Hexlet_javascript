// @ts-check
/* eslint-disable no-console */

// BEGIN (write your solution here)
// prime просто число чистые функции
const prime = (num) => {
    if (num <= 1) return true
    for (let i = 2; i < num ; i++) {
        if (num % i === 0) return true
    }
    return false
}

export const sayPrimeOrNot = (num) => {
    (prime(num)) ? console.log('no') : console.log('yes')
}
// END


sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'