//给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。 
//
// 
//
// 示例 1： 
// 
// 
//输入：root = [1,null,2,3]
//输出：[1,3,2]
// 
//
// 示例 2： 
//
// 
//输入：root = []
//输出：[]
// 
//
// 示例 3： 
//
// 
//输入：root = [1]
//输出：[1]
// 
//
// 
//
// 提示： 
//
// 
// 树中节点数目在范围 [0, 100] 内 
// -100 <= Node.val <= 100 
// 
//
// 
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
//
// Related Topics 栈 树 深度优先搜索 二叉树 👍 2095 👎 0
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
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//   const getNode = (node) => {
//     if (node === null) {
//       return []
//     }
//     return [...getNode(node.left), node.val, ...getNode(node.right)]
//   }
//   return getNode(root)
// };
var inorderTraversal = function (root) {
  const list = []
  const res = []
  let cur = root;
  while (list.length > 0 || cur !== null) {
    if (cur) {
      list.push(cur);
      cur = cur.left
    } else {
      cur = list.pop();
      res.push(cur.val);
      cur = cur.right
    }
  }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
