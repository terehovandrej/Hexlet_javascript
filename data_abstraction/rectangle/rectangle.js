// @ts-check
// eslint-disable-next-line
const makeDecartPoint = (x, y) => {
    return {x, y};
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
    const x = getX(point);
    const y = getY(point);

    if (x > 0 && y > 0) {
        return 1;
    }
    if (x < 0 && y > 0) {
        return 2;
    }
    if (x < 0 && y < 0) {
        return 3;
    }
    if (x > 0 && y < 0) {
        return 4;
    }

    return null;
};

// BEGIN (write your solution here)
const makeRectangle = (point, width, height) => {
    let x = getX(point)
    let y = getY(point)
    let a = { x, y }
    let bx = x + width
    let b = makeDecartPoint (bx, y)
    let cy = y - height
    let c = makeDecartPoint (x, cy)
    let dx = x + width
    let dy = y - height
    let d = makeDecartPoint (dx, dy)
    return {a, b, c, d}
}
const containsOrigin = (rectangle) => {
    let aq = getQuadrant(rectangle.a)
    let bq = getQuadrant(rectangle.b)
    let cq = getQuadrant(rectangle.c)
    let dq = getQuadrant(rectangle.d)
    return aq === 2 && bq === 1 && cq === 3 && dq === 4;
}

const p = makeDecartPoint(-4, 3);
const rectangle1 = makeRectangle(p, 5, 4);

console.log(p)
console.log(rectangle1)
console.log(containsOrigin(rectangle1))

