/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    hash[element] ? (hash[element] += 1) : (hash[element] = 1);
  }
  const result = Object.keys(hash).some((item) => hash[item] > 1);
  return result;
};

containsDuplicate([1, 2, 3, 1]);
