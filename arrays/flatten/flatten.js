// #spread-оператор #является ли объект массивом
const flatten = (array) => {
    let result = []
    for (let v of array) {
        if (Array.isArray(v)){
            result.push(...v)
        }   else result.push(v)

    }
    return result
}

console.log(flatten([1, [3, 2], 9])) // [1, 3, 2, 9])
console.log(flatten([[1], [3, 2], [9]])) // [1, 3, 2, 9])