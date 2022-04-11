const fill = (coll, value, start = 0, end = coll.length) => {
    coll.reduce((acc, current, index, arr) => {
        if (index >= start && index < end) arr[index] = value
    }, [0]);
    return coll
}


console.log(fill([1, 2, 3, 4], '*', 4))