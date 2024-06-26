//给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数 。 
//
// 你可以对一个单词进行如下三种操作： 
//
// 
// 插入一个字符 
// 删除一个字符 
// 替换一个字符 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：word1 = "horse", word2 = "ros"
//输出：3
//解释：
//horse -> rorse (将 'h' 替换为 'r')
//rorse -> rose (删除 'r')
//rose -> ros (删除 'e')
// 
//
// 示例 2： 
//
// 
//输入：word1 = "intention", word2 = "execution"
//输出：5
//解释：
//intention -> inention (删除 't')
//inention -> enention (将 'i' 替换为 'e')
//enention -> exention (将 'n' 替换为 'x')
//exention -> exection (将 'n' 替换为 'c')
//exection -> execution (插入 'u')
// 
//
// 
//
// 提示： 
//
// 
// 0 <= word1.length, word2.length <= 500 
// word1 和 word2 由小写英文字母组成 
// 
//
// Related Topics 字符串 动态规划 👍 3401 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 定义dp数组
  /*
  dp[i][j]
  dp[i][j]表示word1的前i个字符转换为word2的前j个字符所需要的最少操作数
  公式
  if(word1[i-1] === word2[j-1]) {
  dp[i][j] = dp[i-1][j-1]
  }else
  {dp[i][j]=Math.min(dp[i-1}[j-1],dp[i-1}[j],dp[i}[j-1])+1}
   */
  // if (word1.length === 0 || word2.length === 0) return word1.length + word2.length
  let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0))
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }
  return dp[word1.length][word2.length];
};
const word1 = "intention", word2 = "execution"
console.log(minDistance(word1, word2))
//leetcode submit region end(Prohibit modification and deletion)
