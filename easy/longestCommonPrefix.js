/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let index = 0;
  let count = 0;
  while (true) {
    const char = strs[0][index];
    for (const str of strs) {
      if (index <= str.length - 1 && str[index] === char) {
        count++;
      }
    }
    if (count === strs.length) {
      index++;
      result += char;
      count = 0;
    } else {
      break;
    }
  }
  return result;
};

longestCommonPrefix(["a"]);
