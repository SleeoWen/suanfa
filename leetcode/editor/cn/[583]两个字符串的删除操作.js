//给定两个单词 word1 和
// word2 ，返回使得
// word1 和 
// word2 相同所需的最小步数。 
//
// 每步 可以删除任意一个字符串中的一个字符。 
//
// 
//
// 示例 1： 
//
// 
//输入: word1 = "sea", word2 = "eat"
//输出: 2
//解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
// 
//
// 示例 2: 
//
// 
//输入：word1 = "leetcode", word2 = "etco"
//输出：4
// 
//
// 
//
// 提示： 
// 
//
// 
// 1 <= word1.length, word2.length <= 500 
// word1 和 word2 只包含小写英文字母 
// 
//
// Related Topics 字符串 动态规划 👍 679 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let minDistance = function (word1, word2) {
// 实际上是找出最长公共子序列
  /*
  dp[i][j] 表示 text1[0:i-1] 和 text2[0:j-1] 的最长公共子序列的长度
   */
  let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0))
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return word1.length + word2.length - 2 * dp[word1.length][word2.length];
};
// const word1 = "leetcode", word2 = "etco"
// console.log(minDistance(word1, word2))
//leetcode submit region end(Prohibit modification and deletion)
