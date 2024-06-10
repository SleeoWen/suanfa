//给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。 
//
// 回文字符串 是正着读和倒过来读一样的字符串。 
//
// 子字符串 是字符串中的由连续字符组成的一个序列。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "abc"
//输出：3
//解释：三个回文子串: "a", "b", "c"
// 
//
// 示例 2： 
//
// 
//输入：s = "aaa"
//输出：6
//解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa" 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 1000 
// s 由小写英文字母组成 
// 
//
// Related Topics 双指针 字符串 动态规划 👍 1327 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /*
  dp[i][j] 表示 s[i...j] 是否是回文串
  递推公式
  if(s[i]===s[j]){
  if(j-i===1){
  dp[i][j]=true}else if(j-i===2){
  dp[i][j] = true
  }else{
  dp[i][j] = dp[i+1][j-1]
  }
  }
   */
  const n = s.length;
  let count = 0;
  const dp = Array.from(Array(n), () => Array(n).fill(false));
  for (let j = 0; j < n; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j]) {
        count++;
      }
    }
  }
  return count;
};
const s = "aaa"
console.log(countSubstrings(s));
//leetcode submit region end(Prohibit modification and deletion)
