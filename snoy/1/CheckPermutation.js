"use strict";
// 把字符串先转成数组，然后排序，最后合并成字符串进行比较

/**
 * 判断两个字符串是否是同一个字符串的全排列组合
 * @param {*} s1 
 * @param {*} s2 
 */
function permutation(s1, s2) {
  return  Array.from(s1).sort().join('')===Array.from(s2).sort().join('');
}

module.exports = permutation;
