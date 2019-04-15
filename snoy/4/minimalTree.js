// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
// 示例:
// 给定有序数组: [-10,-3,0,5,9],
// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
const TreeNode=require('../../structure/TreeNode');
// 每次获取中间的作为二叉树的父节点，第一个父节点就是根节点，
// 左半部分就是左子树，右半部分就是右子树
// 递归调用
function sortedArrayToBST(numbers) {
  // 边界条件
  if (numbers.length === 0) {
    return null;
  }
  if (numbers.length === 1) {
    return new TreeNode(numbers[0]);
  }
  // 向下取整得到中间值
  let mid = Math.floor(numbers.length / 2);
  let root = new TreeNode(numbers[mid]);
  // 递归 二分法
  root.left = sortedArrayToBST(numbers.slice(0, mid));
  root.right = sortedArrayToBST(numbers.slice(mid + 1));
  return root;
}
module.exports = sortedArrayToBST;

