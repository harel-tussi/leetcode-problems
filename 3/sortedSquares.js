// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = new Array(nums.length).fill(0); // [0,0,0,0]
  let left = 0;
  let right = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
      result[i] = Math.pow(nums[left], 2);
      left++;
    } else {
      result[i] = Math.pow(nums[right], 2);
      right--;
    }
  }
  return result;
};

console.log(sortedSquares([-5, -3, -2, -1]));
