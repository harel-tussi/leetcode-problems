//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (obj[target - element] !== undefined) {
      return [obj[target - element], i];
    }
    obj[element] = i;
  }

  return [];
};

console.log(twoSum([3, 3], 6));
