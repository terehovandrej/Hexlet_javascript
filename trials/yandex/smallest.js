// var smallerNumbersThanCurrent = function(nums) {
//     let result = []
//
//     for (let i = 0; i < nums.length; i++) {
//         let counter = 0
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] > nums[j]) {
//                 counter++
//             }
//         }
//         result.push(counter)
//     }
//     return result
// };


let smallerNumbersThanCurrentFast = function(nums) {
    let hash = new Map();
    let sorted = nums.slice().sort((a,b) => a - b);
    sorted.forEach((number, idx) => hash.has(number)? null: hash.set(number, idx));
    return nums.map(x => hash.get(x));
};

console.log(smallerNumbersThanCurrentFast([8,1,2,2,3]))