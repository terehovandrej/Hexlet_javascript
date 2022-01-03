const getMax = ( array ) => {
    if (array.length === 0) return null
    let [max, ...rest] = array
    for (let i = 0; i <= rest.length ; i++) {
        if (rest[i] > max) max = rest[i]
    }
    return max
}
console.log(getMax([1, 10, 8]))