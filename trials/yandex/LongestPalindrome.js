
const longestPalindrome = (s) => {
    let hash = new Map();
    for (let i = 0; i < s.length; i++) {
        hash.has(s[i]) ? hash.set(s[i], hash.get(s[i]) + 1) : hash.set(s[i], 1)

    }
    let mid = 0
    let result = 0
    console.log(hash)
    console.log(hash.get('c'))
    hash.forEach((value) => {if  (value % 2 !== 0) {mid = 1; result +=(value-1)}
    else result += value   })
    if (mid === 1) result +=1
    return result
};

console.log(longestPalindrome('ccc'))
