// // https://leetcode.cn/problems/coin-change/description/
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
//
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
//
// 你可以认为每种硬币的数量是无限的。
//
//
//
// 示例 1：
//
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1
// 示例 2：
//
// 输入：coins = [2], amount = 3
// 输出：-1
// 示例 3：
//
// 输入：coins = [1], amount = 0
// 输出：0
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const max = 100000
  // 价值是面值，每个重量是1
  // 装满容量为j的背包，至少需要dp[j]个硬币
  // dp[j]=Math.mix(dp[j],dp[j-coins[i]]+1)
  let dp = new Array(amount + 1).fill(max);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], (dp[j - coins[i]] + 1) || max)
    }
  }
  return dp[amount] === max ? -1 : dp[amount];
};
const coins = [1, 2, 5], amount = 11;
console.log(coinChange(coins, amount));