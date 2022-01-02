const calculateAverage = (array) => {
    if ( array.length === 0) return null
    let sum = 0;
    for (const value of array){
        sum += value
    }
    return sum / array.length
}

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1)); // 38.5

const temperatures2 = [];
console.log(calculateAverage(temperatures2)); // null

const temperatures3 = [36, 37.4, 39, 41, 36.6];
calculateAverage(temperatures3); // 38

const temperatures4 = [36, 37.4, 39, 41, 36.6];
console.log(calculateAverage(temperatures4)); // null



