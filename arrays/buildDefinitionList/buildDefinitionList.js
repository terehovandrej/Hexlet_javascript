export default (array) => {
    if (array.length === 0) return ''
    const subresult = []
    for (let i=0; i < array.length; i++){
        subresult.push(`<dt>${array[i][0]}</dt>`)
        subresult.push(`<dd>${array[i][1]}</dd>`)
    }
    return `<dl>${subresult.join('')}</dl>`
}