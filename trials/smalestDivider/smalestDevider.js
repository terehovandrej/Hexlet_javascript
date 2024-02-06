// @ts-check

const smallestDivisor = (n) => {
    if (n===1) return 1
    const iter = (counter, acc) => {
        if (acc % counter === 0) {
            return counter;
        }
        return iter(counter + 1, n);
    };

    return iter(2, n);
}
console.log(smallestDivisor(1))

