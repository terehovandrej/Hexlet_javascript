const substr = (str, begin = 0, len = str.length) => {
    let result = ''
    if (begin < 0) begin = 0
    if (begin > str.length -1) return result
    if ((begin + len -1) >= str.length) len = str.length - begin - 1

    if (len < 0) len = 1
    if (len === 0) return result

    for (let i = begin; i < begin + len; i++) {
        result += str[i]
    }
    return result
}

export default substr
// END

console.log(substr('abca', -1, 100))