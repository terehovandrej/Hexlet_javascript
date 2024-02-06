var arrayRankTransform = function(arr) {

    let hashset = [...new Set(arr)]
    let map = new Map
    let sorted = hashset.slice().sort((a, b) => a -b )
    sorted.forEach((number, idx) =>  map.set(number, idx + 1));
    console.log(map)

    return arr.map(x => map.get(x));

};


let testarr = [37,12,12,9,100,56,80,5,12]
console.log(arrayRankTransform(testarr))


//[5,3,4,2,8,6,7,1,3]


// var arrayRankTransform = function (arr) {
//     let ranks = new Map(),
//         result = [], rank = 1
//
//     let sortedArr = [...arr].sort((a, b) => a - b);
//
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (!ranks.has(sortedArr[i])) {
//             ranks.set(sortedArr[i], rank);
//             rank++
//         }
//     }
//
//     for (let j of arr) {
//         result.push(ranks.get(j));
//     }
//
//     return result;
// };