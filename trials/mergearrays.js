/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

// let nums1 = [1]
// let m = 1
// let nums2 = []
// let n = 0

// let nums1 = [1, 0]
// let m = 1
// let nums2 = [2]
// let n = 1

var merge = function(nums1, m, nums2, n) {
    let i = m-1; // last element of nums1 which is now 3
    let j = n-1; // last element of nums2 which is now 6
    let k = m+n-1 // last element of nums1 which is now 0

    while(j >= 0){
        if(i >= 0 && nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--]
        }else {
            nums1[k--] = nums2[j--]
        }
    }
    return nums1
};


console.log(merge(nums1, m, nums2, n))



// Example 1:
//
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//     The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//     Example 2:
//
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
//     The result of the merge is [1].
//     Example 3:
//
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
//     The result of the merge is [1].
//     Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.