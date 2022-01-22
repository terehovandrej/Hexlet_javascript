// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
const countWords = (text) =>{
    if ( text.length === 0) return {}
    let array = text.split(' ')
    let lower_array = []
    for (let i = 0; i < array.length ; i++) {
        lower_array.push(array[i].toLowerCase())
    }
    let result = {}
    for (const name of lower_array) {
        // Проверка на существование
        if (_.has(result, name)) {
            result[name] += 1;
        } else {
            result[name] = 1;
        }
    }
    return result
}

// END

const text1 = '';
console.log(countWords(text1))