// Definition for single-linked lists .

function ListNode(val) {
  this.data = val;
  this.next = null;
}

ListNode.generateList = function (num) {
  var numbers = num.toString().split('').reverse();
  var result;
  var tmp;
  numbers.forEach(function (number, index) {
    if (index === 0) {
      result = new ListNode(number);
      return;
    }
    tmp = new ListNode(number);
    tmp.next = result;
    result = tmp;
  });
  return result;
};


module.exports = ListNode;