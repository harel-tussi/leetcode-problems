/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    const digit = digits[i];
    if (digit < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
};

console.log(plusOne([9, 9, 3, 9]));
