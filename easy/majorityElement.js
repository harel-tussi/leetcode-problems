/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    hash[num] ? (hash[num] += 1) : (hash[num] = 1);
    if (hash[num] > nums.length / 2) return num;
  }

  return -1;
};

const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result);
