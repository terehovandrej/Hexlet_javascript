var twoSum = function(nums, target) {
    let preres = []
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] < target) preres.push(nums[i])
    }
    console.log(preres)
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target)
                return [i,j]
        }
    }
};
console.log(twoSum([2,7,11,15],9))