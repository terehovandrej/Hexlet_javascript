var search = function(nums, target) {
    let begin = 0
    let end = nums.length - 1

    while (begin < end) {
        let mid = Math.floor((begin + end) / 2)
        if (nums[mid] === target) return target
        else if (nums[mid] > target) end = mid - 1
        else if (nums[mid] < target) begin = mid + 1
    }
    return  -1
};

console.log(search([-1,0,3,5,9,12, 20], 2))