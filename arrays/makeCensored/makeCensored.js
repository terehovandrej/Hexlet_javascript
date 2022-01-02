export default (sentence, stop) => {
    let sentencesArr = sentence.split(' ')
    let result = []
    for (let i = 0; i < sentencesArr.length; i++){
        (stop.includes(sentencesArr[i])) ? result.push('$#%!') : result.push(sentencesArr[i])
    }
    return result.join(' ')
}