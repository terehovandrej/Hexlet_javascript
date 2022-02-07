// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
const average = (...params) => {
    if (params.length === 0) return null
    return _.sum(params) / params.length
}
// END
console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null