// @ts-check
/* eslint-disable no-param-reassign */

import crc32 from 'crc-32';

// BEGIN (write your solution here)


const make = () => {
    return []
}
 const map = make()

export const set = (map, key, value) => {
    let hash = Math.abs(crc32.str(key)%1000)
    if (map[hash] === undefined) {
        map[hash] = [key, value]
        return true
    } else if (map[hash][0] === key) {
        map[hash] = [key, value]
        return true
    }
    else return false
}

export const get = (map, key, defaultValue = null) => {
    let hash = Math.abs(crc32.str(key) % 1000)
    if (map[hash] === undefined) return defaultValue
    else if (map[hash][0]=== key){
        return map[hash][1]
    } else return defaultValue
}
// END
// set(map, 'key2', 'value2')
// console.log(get(map, 'key2') )
// console.log(get([], 'key2', 'ads') )
console.log(set(map, 'aaaaa0.462031558722291', 'vvv'))
console.log(set(map, 'aaaaa0.0585754039730588', 'boom!'))
console.log(get(map, 'aaaaa0.0585754039730588'))