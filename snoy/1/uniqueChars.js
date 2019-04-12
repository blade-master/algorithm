// 查看是否有重复字符
// 利用二进制的每一位来保存数字
// aabcccccaaa => false
// abc =>true
/**
 * @param 需要查重的字符串
 */
const asciiA = "a".charCodeAt(0);
function isUniqueCharsProgress(str) {
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    let val = str.charCodeAt(i) - asciiA;
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= 1 << val;
  }
  return true;
}
module.exports = isUniqueCharsProgress;
