const sequenceSum = (begin, end) => {
    if (begin > end) return NaN
    let result = begin
    if (begin === end) return result

    return result + sequenceSum(begin+1, end)
};

console.log(sequenceSum(0,0))




const apply =(count, func, argument) => {
    if (count === 0) return argument
    return apply(count - 1, func, func(argument))
}// 4


console.log(apply(2, Math.sqrt, 16))