/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = 0;
  while (x !== 0) {
    reversed = reversed * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return Math.abs(reversed) > Math.pow(2, 31) ? 0 : reversed;
};
