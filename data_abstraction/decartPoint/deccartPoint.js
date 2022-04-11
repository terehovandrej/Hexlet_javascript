const makePoint = (x, y) => {
    return {
        angle: Math.atan2(y, x),
        radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
};

// BEGIN (write your solution here)
const getX = (point) => {
    return Math.round(point.radius * Math.cos(point.angle))
}

const getY = (point) => {
    return  Math.round(point.radius * Math.sin(point.angle))
}


const x = 3;
const y = 2;

// point хранит в себе данные в полярной системе координат
const point = makePoint(x, y);

// Здесь происходит преобразование из полярной в декартову
console.log(getX(point))
console.log(getY(point))
