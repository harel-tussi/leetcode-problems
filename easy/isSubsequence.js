// https://leetcode.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let tIndex = 0;
  let sIndex = 0;

  while (tIndex < t.length) {
    if (t[tIndex] === s[sIndex]) {
      sIndex++;
    }
    tIndex++;
  }
  return sIndex === s.length;
};

// O(n)
