// console.log(Math.sqrt(81))

export default function isPowerOfThree(x) {
    for (let i = 0; i < x; i++) {
        if (3 ** i === x) return true
    }
    return false
}

console.log(isPowerOfThree(1))