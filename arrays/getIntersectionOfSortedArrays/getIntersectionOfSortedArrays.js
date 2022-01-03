const getIntersectionOfSortedArrays = ( array1, array2) => {
    let result =[]
    let a1 = 0
    let a2 = 0
    do {
        if (array1[a1] === array2[a2]) {
            if (result[result.length-1] !== array1[a1]){
                result.push(array1[a1])
            }
            a1++
            a2++
        }
        else if (array1[a1] < array2[a2]){
            a1++
        }else if (array1[a1] > array2[a2]){
            a2++
        }

    } while (a1 <array1.length && a2 < array2.length)
    return result
}

console.log(getIntersectionOfSortedArrays([], []))
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]))
console.log(getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3]))

