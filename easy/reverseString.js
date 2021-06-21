/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let end = s.length - 1;
  const middle = Math.floor(s.length / 2);
  while (end >= middle) {
    const temp = s[end];
    s[end] = s[s.length - 1 - end];
    s[s.length - 1 - end] = temp;
    end--;
  }
  return s;
};

reverseString(["h", "e", "l", "l", "o"]);
