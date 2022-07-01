import Point from './Point.js';
import Segment from './Segment.js';

// BEGIN (write your solution here)

const reverse = (segment) => {
    return new Segment(segment.getEndPoint(), segment.getBeginPoint())
}
export default reverse

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

// прямое обращение к свойствам приведено только в демонстрационных целях
// console.log(
//     segment.beginPoint.x,
//     segment.beginPoint.y,
//     segment.endPoint.x,
//     segment.endPoint.y,
// );// => 1 10 11 -3
//
// console.log(
//     reversedSegment.beginPoint.x,
//     reversedSegment.beginPoint.y,
//     reversedSegment.endPoint.x,
//     reversedSegment.endPoint.y,
// ); // => 11 -3 1 10
const point2 = new Point(11, -3);
console.log(reversedSegment)

console.log(JSON.stringify(reversedSegment.getBeginPoint()))
console.log(JSON.stringify(point2))
// console.log(JSON.stringify(point2))