const findPivotIndex = (arr) => {
    let left = 0
    let right = arr.reduce((a, b) => {return a + b}) - arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (left === right) return i
        left+= arr[i]
        right-=arr[i+1]
    }
return -1
}
let arr = [1,7,3,6,5,6]
console.log(findPivotIndex(arr))
// let test = arr.reduce((a, b) => {return a + b})
// console.log(test)


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let res=-1;
    let leftSum = 0;
    let rightSum = 0;

    nums.forEach(v => rightSum+=v);

    for(var i=0; i<nums.length; i++){
        const curr = nums[i];

        rightSum -= curr;

        if(leftSum === rightSum) return i;

        leftSum+=curr;
    }

    return res;


};