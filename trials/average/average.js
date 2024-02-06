// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
const average = (...params) => {
    return params.length === 0 ?  null :  _.sum(params) / params.length


}
// END
console.log(average(1, 2, 3))