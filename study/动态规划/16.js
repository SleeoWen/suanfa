// // https://leetcode.cn/problems/perfect-squares/description/
// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
//
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
//
//
//
// 示例 1：
//
// 输入：n = 12
// 输出：3
// 解释：12 = 4 + 4 + 4
// 示例 2：
//
// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const max = Number.MAX_VALUE;
  const temp = Math.sqrt(n);
  const numbers = [];
  for (let i = 1; i <= temp; i++) {
    numbers.push(i * i);
  }
  const dp = new Array(n + 1).fill(max);
  dp[0] = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = numbers[i]; j <= n; j++) {
      dp[j] = Math.min(dp[j], (dp[j - numbers[i]] + 1) || max)
    }
  }
  return dp[n];
};
const n = 13;
console.log(numSquares(n));