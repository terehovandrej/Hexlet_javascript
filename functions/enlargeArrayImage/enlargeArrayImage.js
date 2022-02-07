const arr = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
];
// ****
// *  *
// *  *
// ****
const arr2 = [
    ['*', '*', '*', '*']]




const enlargeArrayImage = (array) => {
    const doubleArr = (array) => {
        return array.reduce((total, amount) => {
            total.push(amount)
            total.push(amount)
            return total;
        }, [])
    }
    return doubleArr(array.map((el) => doubleArr(el)))
}

console.log(enlargeArrayImage(arr))
// console.log(enlargeArrayImage(arr2))
// enlargeArrayImage(arr);
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********