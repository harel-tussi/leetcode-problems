/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const memo = {};

  const recurse = (n, memo) => {
    if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n <= 2) return 1;
    const result = recurse(n - 1, memo) + recurse(n - 2, memo);
    memo[n] = result;
    return result;
  };

  return recurse(n, memo);
};
