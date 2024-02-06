const isPalindrom = (text) => {
    let firt = 0
    let last = text.length -1

    const compare = (first, last) => {
        if (first >= last) return true
        else if (text[first] !== text[last]) return false
        else return compare(first + 1, last - 1)
    }
    return compare(0, text.length - 1 )
}

console.log(isPalindrom('maram'))
