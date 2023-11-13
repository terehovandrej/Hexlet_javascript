const encrypt = (text) => {
    let len = 0
    let result = ''
    text.length % 2 === 0 ? len = text.length : len = text.length - 1
    for (let i = 0; i<len; i+=2) {
        result+= text[++i]
        result+= text[--i]
    }
    if (len < text.length){
        result+=text[text.length-1]
    }
    return result
}
// END

export default encrypt;



console.log(encrypt('attacka')) // / 'taatkc'