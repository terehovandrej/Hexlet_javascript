
// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const convert = (...params) => {
    let result = []
    for (let param of params) {
        let date = new Date(...param)
        result.push(date.toDateString())
    }
    return result
}
// END




// convert();
// // []
//
console.log(convert([1993, 3, 24]));
// ['Sat Apr 24 1993']
//
// convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// // ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
