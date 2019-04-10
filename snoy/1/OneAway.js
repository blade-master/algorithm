"use strict";
// 把字符串先转成数组，然后排序，最后合并成字符串进行比较

/**
 * pale, ple => true
 * pale, ale =>true
 * pales, pale => true
 * pale, bale =>true
 * pale, pate =>true
 * pale, bae => false
 * pale, al => false
 * 只能修改一个字符，替换或者添加或者删除
 * @param {*} s1
 * @param {*} s2
 */
function onEditAway(s1, s2) {
  if (Math.abs(s1.length - s2.length > 1)) {
    return false;
  }
  let long_string = s1.length < s2.length ? s2 : s1;
  let short_string = s1.length < s2.length ? s1 : s2;
  let foundDifference = false;
  let [long_index, short_index] = [0, 0];
  while (long_index < long_string.length && short_index < short_string.length) {
    if (long_string[long_index] != short_string[short_index]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
      if (long_string.length === short_string.length) {
        short_index++;
      }
    } else {
      short_index++;
    }
    long_index++;
  }
  return true;
}

module.exports = onEditAway;
console.log(onEditAway("pales", "pale"));
