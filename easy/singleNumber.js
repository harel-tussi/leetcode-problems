// O(n) time complexity
// O(n) space complexity
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hashMap = {};
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    hashMap[num] = !!!hashMap[num] ? 1 : hashMap[num] + 1;
  }
  const keys = Object.keys(hashMap);
  keys.forEach((key) => {
    if (hashMap[key] === 1) {
      result = key;
    }
  });

  return result;
};

// O(n) time complexity
// O(n) space complexity
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function (nums) {
  let a = 0;
  for (const num of nums) {
    a ^= num;
  }
  console.log(a);
  return a;
};

const result = singleNumber2([4, 1, 2, 1, 2]);
