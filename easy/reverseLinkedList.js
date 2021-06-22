/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let curr = null;
  while (head != null) {
    let temp = curr;
    curr = head;
    head = head.next;
    curr.next = temp;
  }
  return curr;
};
