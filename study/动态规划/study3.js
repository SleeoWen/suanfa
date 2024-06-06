// 跳楼梯 https://leetcode.cn/problems/min-cost-climbing-stairs/
const res = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const length = cost.length + 1;
  let dp = new Array(length).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i < length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[length - 1];
};
console.log(minCostClimbingStairs(res));