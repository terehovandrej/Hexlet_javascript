const reverseNum = (num) => {
    let result = 1
    if (num < 0) result *=-1
    let m = 0
    let n = Math.abs(num)
    while (n>0){
        m = m*10 + n%10
        n = Math.floor(n / 10)
    }
    return result * m
}


console.log(reverseNum(12345))