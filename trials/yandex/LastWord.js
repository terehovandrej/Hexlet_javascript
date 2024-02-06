var lengthOfLastWord = function(s) {
    let result = ''
    let firstword = false
    for (let i = s.length; i > 0; i--){
        if (s[i-1] !== ' ') {
            result = s[i-1] + result
            firstword = true
        } else if (firstword === true) break
    }
    return result.length
};

console.log(lengthOfLastWord("a"))