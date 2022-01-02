const getSameParity = (array) => {
    const odd = []
    const even = []
    if (array.length === 0) { return odd}
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) odd.push(array[i])
        else even.push(array[i])
    }
    if (array[0] % 2 === 0) return odd
    else return even
        }

