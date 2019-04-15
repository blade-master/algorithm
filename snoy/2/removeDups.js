const LinedListNode = require("../../structure/ListNode");
const nodeList = LinedListNode.generateList("12345h67uuk");

/***
 * 删除重复元素
 */
function deleteDups(nodeList) {
  let set = new Set();
  while (nodeList != null && nodeList.next != null) {
    if (!set.has(nodeList.data)) {
      set.add(nodeList.data);
    } else {
      nodeList = nodeList.next;
    }
  }

  return set;
}

module.exports = deleteDups;

deleteDups(nodeList);
