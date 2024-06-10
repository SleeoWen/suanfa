//给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数，结果需要对 10⁹ + 7 取模。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "rabbbit", t = "rabbit"
//输出：3
//解释：
//如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
//rabbbit
//rabbbit
//rabbbit 
//
// 示例 2： 
//
// 
//输入：s = "babgbag", t = "bag"
//输出：5
//解释：
//如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
//babgbag
//babgbag
//babgbag
//babgbag
//babgbag
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length, t.length <= 1000 
// s 和 t 由英文字母组成 
// 
//
// Related Topics 字符串 动态规划 👍 1237 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
// 定义dp数组
//   dp[i][j]代表以i-1为结尾的s中，出现以j-1为结尾的t的次数
  /*
  递推公式
  if(s[i-1]===t[j-1]){
  dp[i][j]= dp[i-1][j-1]+dp[i-1][j];
  }else{
  dp[i][j]=dp[i-1][j]
  }
   */
  let dp = Array.from(Array(s.length + 1), () => Array(t.length + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= s.length; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  // console.log(dp);
  return dp[s.length][t.length];
};
// const s = "babgbag", t = "bag"
// const res = numDistinct(s, t)
//leetcode submit region end(Prohibit modification and deletion)
