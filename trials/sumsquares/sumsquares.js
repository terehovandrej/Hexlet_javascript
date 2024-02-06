// @ts-check

// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
const sumSquare = (n) => {
    let result = 0
    for (let i = 0; i <= n; i++) {
        result += i ** 2
    }
    return result
}
    const squareSum = (n) => {
        let result = 0
        for (let i = 0; i <= n; i++) {
            result += i
        }
        return result ** 2
    }
    return(-sumSquare(n) + squareSum(n))

}
// END

console.log(sumSquareDifference(10))