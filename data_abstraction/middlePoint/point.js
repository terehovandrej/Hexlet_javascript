const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const getMidpoint = (point1, point2) => {
    return {x: (point1.x + point2.x) / 2,  y: (point1.y + point2.y) / 2}
}
const point3 = getMidpoint(point1, point2);


console.log(point3); // => { x: 2, y: 2 };



// x = (x1 + x2) / 2 и y = (y1 + y2) / 2.