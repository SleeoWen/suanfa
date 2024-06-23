var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  const rootValue = postorder.pop();
  const index = inorder.indexOf(rootValue);
  const root = new TreeNode(rootValue, null, null);
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  root.right = buildTree(inorder.slice(index + 1), postorder.slice(index))
  return root;
};
//leetcode submit region end(Prohibit modification and deletion)
