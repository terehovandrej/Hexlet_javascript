const isBracketStructureBalanced = (array) => {
    let stack = []
    for (let i = 0; i < array.length; i++) {
        let bracket = array[i]
        if (bracket === '(') stack.push(bracket)
        else if (bracket === '[') stack.push(bracket)
        else if (bracket === '{') stack.push(bracket)
        else if (bracket === '<') stack.push(bracket)
        else if (bracket === ')' && (stack[stack.length -1] === '(')) stack.pop()
        else if (bracket === ']' && (stack[stack.length -1] === '[')) stack.pop()
        else if (bracket === '}' && (stack[stack.length -1] === '{')) stack.pop()
        else if (bracket === '>' && (stack[stack.length -1] === '<')) stack.pop()
        else return false

    }
    return stack.length === 0
}

console.log(isBracketStructureBalanced('())'))
console.log(isBracketStructureBalanced('(>'))
console.log(isBracketStructureBalanced('[()]'))
console.log(isBracketStructureBalanced('{<>}}'))
console.log(isBracketStructureBalanced('([)]'))
