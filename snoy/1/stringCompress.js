// aabcccccaaa ==> a2b1c5a3
// 如果变换后的字符串长度大于等于原来字符串，则返回原字符串，
// 否则返回变换后的字符串

/**
 * @param 需要压缩的字符串
 */
function compress(str) {
  let compressString = "";
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str[i] != str[i + 1]) {
      compressString += str[i];
      compressString += countConsecutive;
      if (compressString.length > str.length) {
        return str;
      }
      countConsecutive = 0;
    }
  }
  return compressString.length < str.length ? compressString : str;
}
module.exports = compress;

let str = "aabcccccaaa";
console.log(compress(str));
