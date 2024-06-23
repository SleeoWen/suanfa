//给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。 
//
// 假设二叉树中至少有一个节点。 
//
// 
//
// 示例 1: 
//
// 
//
// 
//输入: root = [2,1,3]
//输出: 1
// 
//
// 示例 2: 
//
// 
//
// 
//输入: [1,2,3,4,null,5,6,null,null,7]
//输出: 7
// 
//
// 
//
// 提示: 
//
// 
// 二叉树的节点个数的范围是 [1,10⁴] 
// 
// -2³¹ <= Node.val <= 2³¹ - 1 
// 
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 581 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let res = null;
  let deepValue = 0;
  const searchLeft = (node, deep) => {
    if (node === null) {
      return
    }
    if (!node.left && !node.right) {
      if (deep > deepValue) {
        deepValue = deep;
        res = node.val;
      }
    }
    if (node.left) {
      searchLeft(node.left, deep + 1)
    }
    if (node.right) {
      searchLeft(node.right, deep + 1)
    }
  }
  searchLeft(root, 1)
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
