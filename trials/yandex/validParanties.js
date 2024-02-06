var isValid = function(s) {
    let stack = []
    for (let i=0; i < s.length; i++){
        if (s[i] === '(') stack.push(s[i])
        else if (s[i] === '{') stack.push(s[i])
        else if (s[i] === '[') stack.push(s[i])
        else if (s[i] === ')')
            if (stack.pop() === '(') continue
                else return false
        else if (s[i] === ']')
            if (stack.pop() === '[') continue
            else return false
        else if (s[i] === '}')
            if (stack.pop() === '{') continue
            else return false
    }
    return stack.length <= 0;

};

let s = "()[]{}"
console.log(isValid(s))