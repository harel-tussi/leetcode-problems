/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const climb = (i, n) => {
    if (memo[i]) return memo[i];
    if (i > n) return 0;
    if (i === n) return 1;
    memo[i] = climb(i + 1, n) + climb(i + 2, n);
    return memo[i];
  };
  const memo = {};
  return climb(0, n, memo);
};

console.log(climbStairs(10));
