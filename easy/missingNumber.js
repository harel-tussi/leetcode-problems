/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length === 0) return 0;
  let min = nums[0];
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element < min) min = element;
    if (element > max) max = element;
    sum += element;
  }

  function sum_of_range(start, end) {
    return (end * (end + 1)) / 2 - (start * (start + 1)) / 2;
  }

  return sum_of_range(0, nums.length) - sum;
};

missingNumber([3, 0, 1]);
