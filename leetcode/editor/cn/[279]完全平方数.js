//给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。 
//
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
// 
//
// 
//
// 示例 1： 
//
// 
//输入：n = 12
//输出：3 
//解释：12 = 4 + 4 + 4 
//
// 示例 2： 
//
// 
//输入：n = 13
//输出：2
//解释：13 = 4 + 9 
//
// 
//
// 提示： 
//
// 
// 1 <= n <= 10⁴ 
// 
//
// Related Topics 广度优先搜索 数学 动态规划 👍 1980 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const top = Number.MAX_VALUE;
// 定义dp数组，dp【j】是值为j的完全平方数的最小数量
  const dp = new Array(n + 1).fill(top);
  const max = Math.floor(Math.sqrt(n));
  dp[0] = 0;
  for (let i = 1; i <= max; i++) {
    for (let j = i * i; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1 || top);
    }
  }
  return dp[n]
};
// console.log(numSquares(13));
//leetcode submit region end(Prohibit modification and deletion)
