const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split("");
  for (let i = 0; i <= arr.length; i++) {
    if (n >= 100) {
      if (arr[i] < arr[i + 1]) {
        delete arr[i];
      }
    } else if (n < 100) {
      let min = Math.min(...arr);
      let arrMin = arr.filter(e => e != min);
      return Number(arrMin.join(""));
    }
  }

  return Number(arr.join(""));
}

module.exports = {
  deleteDigit,
};
