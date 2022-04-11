// @ts-check
// BEGIN (write your solution here)
let point1 = [0, 0];
let point2 = [3, 4];
// calculateDistance(point1, point2); // 5
const calculateDistance = (point1, point2) => {
    result = Math.sqrt((Math.pow((point2[0] - point1[0]), 2) + Math.pow((point2[1] - point1[1]), 2)))

    return result
}
export default calculateDistance(point1, point2)
console.log(calculateDistance(point1, point2))
// END
