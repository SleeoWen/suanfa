// https://leetcode.cn/problems/unique-binary-search-trees/description/
/**
 * @param {number} n
 * @param{object[]} items
 * @return {number}
 */
var bagFunc = function (n, items) {
  n = n + 1
  const length = items.length;
  // 定义dp数组，下标为0到i的物品任取放进容量为j的背包的最大价值
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = i >= items[0].weight ? items[0].value : 0;
  }
  console.log(dp);
  // 不放物品i
  // 最大值是dp[i-1][j]
  //   放物品i
  // 最大值是dp[i-1][j-items[i-1].weight]+items[i-1].value
  // dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-items[i-1].weight]+items[i-1].value)
  for (let i = 1; i < length; i++) {
    for (let j = 1; j < n; j++) {
      const temp = dp[j - items[i].weight] + items[i].value || 0;
      console.log('不放物品价值', temp);
      dp[j] = Math.max(dp[j], temp);
    }
  }
  console.log(dp);
  return dp[n - 1];
};
const items = [
  {weight: 1, value: 15},
  {weight: 3, value: 20},
  {weight: 4, value: 30},]
console.log(bagFunc(5, items));