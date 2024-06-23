//给定一个二叉树，判断它是否是 平衡二叉树 
//
// 
//
// 示例 1： 
// 
// 
//输入：root = [3,9,20,null,null,15,7]
//输出：true
// 
//
// 示例 2： 
// 
// 
//输入：root = [1,2,2,3,3,null,null,4,4]
//输出：false
// 
//
// 示例 3： 
//
// 
//输入：root = []
//输出：true
// 
//
// 
//
// 提示： 
//
// 
// 树中的节点数在范围 [0, 5000] 内 
// -10⁴ <= Node.val <= 10⁴ 
// 
//
// Related Topics 树 深度优先搜索 二叉树 👍 1523 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  //还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
  // 1. 确定递归函数参数以及返回值
  const getDepth = function (node) {
    // 2. 确定递归函数终止条件
    if (node === null) return 0;
    // 3. 确定单层递归逻辑
    let leftDepth = getDepth(node.left); //左子树高度
    // 当判定左子树不为平衡二叉树时,即可直接返回-1
    if (leftDepth === -1) return -1;
    let rightDepth = getDepth(node.right); //右子树高度
    // 当判定右子树不为平衡二叉树时,即可直接返回-1
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }
  return !(getDepth(root) === -1);
};
//leetcode submit region end(Prohibit modification and deletion)
