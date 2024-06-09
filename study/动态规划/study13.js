// https://leetcode.cn/problems/coin-change-ii/description/
// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
//
// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
//
// 假设每一种面额的硬币有无限个。
//
// 题目数据保证结果符合 32 位带符号整数。
//
//
//
// 示例 1：
//
// 输入：amount = 5, coins = [1, 2, 5]
// 输出：4
// 解释：有四种方式可以凑成总金额：
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
// 重量和value相等
//   装满重量为i的背包有dp[i]种方法
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  // dp[j] += dp[j - coins[i]]
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount]
};
// var change = function (amount, coins) {
// // 重量和value相等
// //   装满重量为i的背包有dp[i]种方法
//   const dp = new Array(amount + 1).fill(0);
//   dp[0] = 1;
//   // dp[j] += dp[j - coins[i]]
//   for (let j = 0; j <= amount; j++) {
//     for (let i = 0; i <= coins.length; i++) {
//       dp[j] += dp[j - coins[i]]||0;
//     }
//     console.log(dp);
//   }
//   return dp[amount]
// };
const amount = 5, coins = [1, 2, 5]
console.log(change(amount, coins))