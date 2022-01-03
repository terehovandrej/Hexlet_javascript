const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) return null
    let nearest = []
    let dist = Infinity;
    let cordinat = []
    for (const loc of locations){
        const [name, cordinates] = loc
        if (getDistance(cordinates, currentPoint) < dist){
            dist = getDistance(cordinates, currentPoint)
            nearest = name
            cordinat = cordinates

        }
    }
    if (nearest === null)
    return [nearest, cordinat]
}

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// console.log(getTheNearestLocation(locations, currentPoint))
console.log(getTheNearestLocation([], currentPoint))