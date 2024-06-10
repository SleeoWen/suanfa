//给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
//输出：3
//解释：长度最长的公共子数组是 [3,2,1] 。
// 
//
// 示例 2： 
//
// 
//输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
//输出：5
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums1.length, nums2.length <= 1000 
// 0 <= nums1[i], nums2[i] <= 100 
// 
//
// Related Topics 数组 二分查找 动态规划 滑动窗口 哈希函数 滚动哈希 👍 1083 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
// 用一个二位的dp数组解决问题
  // dp[i][j] 表示 nums1[0:i-1] 和 nums2[0:j-1] 的最长重复子数组的长度
  let dp = Array.from(Array(nums1.length + 1), () => Array(nums2.length + 1).fill(0));
  /*
  递推公式
  if(nums1[i-1] === nums2[j-1]){
  dp[i][j] = dp[i-1][j-1] + 1;
  }
   */
  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }
  console.table(dp);
  // return Math.max(...dp.map(item => Math.max(...item)))
};
// const nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7]
// console.log(findLength(nums1, nums2))
//leetcode submit region end(Prohibit modification and deletion)
