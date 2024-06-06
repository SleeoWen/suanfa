// https://leetcode.cn/problems/integer-break/description/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
// 定义dp数组
  const dp = new Array(n + 1).fill(0);
  // 初始化
  dp[0] = 0;//0
  dp[1] = 0;//1
  dp[2] = 1;//2
  dp[3] = 2;//3
  dp[4] = 4;
  dp[5] = 6;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], j * dp[(i - j)], j * (i - j));
    }
  }
  return dp[n];
};
console.log(integerBreak(10));