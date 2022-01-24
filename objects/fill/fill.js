// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
const fill = (obj1, data, obj2) => {
    if (data.length === 0) {
        return Object.assign(obj1, obj2)
    } else {
        let dataobj = _.pick(obj2, data)
        return Object.assign(obj1, dataobj)
    }

}
// END
