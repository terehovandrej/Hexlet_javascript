const countUniqChars = (text) => {
    let uniqChars = []
    for (let i = 0; i < text.length; i++) {
        if (!uniqChars.includes(text[i])){
            uniqChars.push(text[i])
        }
    }
    return uniqChars.length
}

const text3 = 'aabbcc';
console.log(countUniqChars(text3)) // 0