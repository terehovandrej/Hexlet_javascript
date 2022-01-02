export default (array, cur) => {
    let ressult = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].slice(0, 3) === cur) {
            ressult += Number(array[i].slice(4))
        }
    }
    return ressult
}
