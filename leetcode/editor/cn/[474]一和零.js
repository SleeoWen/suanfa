//给你一个二进制字符串数组 strs 和两个整数 m 和 n 。 
//
// 
// 请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。 
// 
//
// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。 
//
// 
//
// 示例 1： 
//
// 
//输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
//输出：4
//解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
//其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 
//n 的值 3 。
// 
//
// 示例 2： 
//
// 
//输入：strs = ["10", "0", "1"], m = 1, n = 1
//输出：2
//解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= strs.length <= 600 
// 1 <= strs[i].length <= 100 
// strs[i] 仅由 '0' 和 '1' 组成 
// 1 <= m, n <= 100 
// 
//
// Related Topics 数组 字符串 动态规划 👍 1152 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
//重量相当于两个维度
  // 装满i个0和j个1的背包的最大容量是dp[i][j]个
  // dp[j]=Math.max(dp[j],dp[j-weight[i]+value[i])
  // 如果一个物品有x个0，y个1
  // dp[j]=Math.max(dp[i][j],dp[i-x]+dp[j-y]+1);
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  dp[0][0] = 0;
  for (let str of strs) {
    let x = 0;
    let y = 0;
    for (let c of str) {
      if (c === '0') {
        x++;
      } else {
        y++;
      }
    }
    for (let i = m; i >= x; i--) {
      for (let j = n; j >= y; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - x][j - y] + 1);
        // console.log(dp[i][j], 'kss');
      }
    }
  }
  return dp[m][n]
};
//leetcode submit region end(Prohibit modification and deletion)
