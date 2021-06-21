/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === " ") {
      counter = 0;
    } else {
      counter++;
      if (counter !== 0) {
        max = counter;
      }
    }
  }
  console.log(max);
  return max;
};

lengthOfLastWord("Today is a nice day");
