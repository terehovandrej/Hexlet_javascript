const magic = (...args) => {
    let fnAccumulator = [].concat(args)
    const acc = (...args) => {
        fnAccumulator = fnAccumulator + [].concat(args)
        return acc
    }

    acc.valueOf = () => fnAccumulator.reduce((accumulator, item) => {
        accumulator +=item
        return accumulator
    }, 0)
    return acc
}



console.log(magic(5, 2, -8))
