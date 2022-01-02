export default (arr1, arr2) => {
    const uniq1 = _.uniq(arr1)
    const uniq2 = _.uniq(arr2)
    let result = 0
    for (const item1 of uniq1){
        for (const item2 of uniq2){
            if (item1 === item2){
                result++
            }
        }
    }
    return result
}