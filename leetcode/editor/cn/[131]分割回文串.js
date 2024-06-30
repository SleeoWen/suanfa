//给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "aab"
//输出：[["a","a","b"],["aa","b"]]
// 
//
// 示例 2： 
//
// 
//输入：s = "a"
//输出：[["a"]]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 16 
// s 仅由小写英文字母组成 
// 
//
// Related Topics 字符串 动态规划 回溯 👍 1801 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}
/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
  let path = []
  const res = []
  const length = s.length;
  const backtrack = (startIndex) => {
    if (startIndex >= length) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < length; i++) {
      if (!isPalindrome(s, startIndex, i)) continue;
      path.push(s.slice(startIndex, i + 1));
      backtrack(i + 1);
      console.log(path);
      path.pop();
    }
  }
  backtrack(0);
  return res;
};
console.log(partition("aab"));
//leetcode submit region end(Prohibit modification and deletion)
