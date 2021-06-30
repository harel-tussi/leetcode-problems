/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  const isAlphanumeric = (char) => {
    const code = String(char).charCodeAt();
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    )
      return false;
    return true;
  };

  while (start < end) {
    if (!isAlphanumeric(s[start])) start++;
    else if (!isAlphanumeric(s[end])) end--;
    else if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

console.log(isPalindrome("raceacar"));
