// @ts-check

// BEGIN (write your solution here)
function getY() {
    return this.y;
}

function getX() {
    return this.x;
}
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
    // Методы по прежнему определены снаружи как обычные функции
}

export default Point
// END