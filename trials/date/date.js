const convert = (...params) => {
    let result = []
    if (params.length === 0) return result

    params.forEach((x, index, array) => {
        let date = new Date(x)
        array[index] = date.toDateString()
    })
    return params
}


console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));