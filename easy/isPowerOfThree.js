/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;
  const recurse = (curr, n) => {
    if (curr === n) return true;
    if (curr > n) return false;
    return recurse(3 * curr, n);
  };

  return recurse(3, n);
};
