const solution = (n) => {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += i
    }
    return result.length - 1
};

console.log(solution(9))