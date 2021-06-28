/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "{" || char === "(" || char === "[") {
      arr.push(char);
    } else {
      const lastElement = arr[arr.length - 1];
      if (char === ")" && lastElement === "(") arr.pop();
      else if (char === "]" && lastElement === "[") arr.pop();
      else if (char === "}" && lastElement === "{") arr.pop();
      else arr.push(char);
    }
  }
  return arr.length === 0;
};

isValid("()");
isValid("([]){}");
isValid("(]");
isValid("([)]");
isValid("{[]}");
