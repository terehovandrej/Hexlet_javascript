// @ts-check

// BEGIN (write your solution here)
import Point from './Point.js';
function getBeginPoint() {
    return new Point(this.beginPoint.getX(), this.beginPoint.getY());
};

function getEndPoint() {
    return new Point(this.endPoint.getX(), this.endPoint.getY());
};
function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    // Методы по прежнему определены снаружи как обычные функции
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
};

export default Segment
// END