//给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链
//表节点，返回 反转后的链表 。
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5], left = 2, right = 4
//输出：[1,4,3,2,5]
//
//
// 示例 2：
//
//
//输入：head = [5], left = 1, right = 1
//输出：[5]
//
//
//
//
// 提示：
//
//
// 链表中节点数目为 n
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
//
//
//
//
// 进阶： 你可以使用一趟扫描完成反转吗？
//
// Related Topics 链表 👍 1818 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // 如果链表为空或只有一个节点,或 left 等于 right,直接返回头节点
  if(!head || !head.next || left === right) {
    return head;
  }

  // 创建虚拟头节点,方便处理边界情况
  let dummy = new ListNode(0);
  dummy.next = head;

  // 找到 left 节点的前一个节点
  let prev = dummy;
  for(let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  // 找到 left 节点
  let curr = prev.next;

  // 反转从 left 到 right 的节点
  for(let i = 0; i < right - left; i++) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  // 返回虚拟头节点的下一个节点,即反转后的头节点
  return dummy.next;
};
//leetcode submit region end(Prohibit modification and deletion)
