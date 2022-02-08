//
// 0:      1
// 1:     1 1
// 2:    1 2 1
// 3:   1 3 3 1
// 4:  1 4 6 4 1
// 5: 1 5 10 10 5 1
// 6: 1 6 15 20 15 6 1
// 7: 1 7 21 35 35 21 7 1

let arr = new Array(50);

const genNexArr = (array) => {
    let result = [1]
    array.reduce((acc, current, index, arr) => {
        result.push(arr[index] + arr[index+1])
    }, [1]);
    result[result.length -1] = 1
    return result
}

const generate = (num) => {
    let arr = new Array(num+1)
    arr[0] = [1]
    for (let i = 1; i < num+1; i++) {
        arr[i] = genNexArr(arr[i-1])
    }
    return arr[num]
}

console.log(generate(4))