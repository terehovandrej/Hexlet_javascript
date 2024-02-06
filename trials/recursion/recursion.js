const sequenceSum = (begin, end) => {
    if (begin > end) return NaN
    let result = begin
    if (begin === end) return result

    return result + sequenceSum(begin+1, end)
};

console.log(sequenceSum(0,0))
