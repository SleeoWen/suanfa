//给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [1,5,11,5]
//输出：true
//解释：数组可以分割成 [1, 5, 5] 和 [11] 。 
//
// 示例 2： 
//
// 
//输入：nums = [1,2,3,5]
//输出：false
//解释：数组不能分割成两个元素和相等的子集。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 200 
// 1 <= nums[i] <= 100 
// 
//
// Related Topics 数组 动态规划 👍 2101 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 计算数组元素的总和
  const sum = (nums.reduce((p, v) => p + v));
  // 如果总和是奇数,则无法平均分成两个相等的子集
  if (sum & 1) return false;
  // 初始化一个 dp 数组,存放能够组成的目标和
  const dp = Array(sum / 2 + 1).fill(0);
  // 遍历数组元素
  for (let i = 0; i < nums.length; i++) {
    // 逆序遍历目标和,确保每个元素只使用一次
    for (let j = sum / 2; j >= nums[i]; j--) {
      // 更新 dp 数组,取当前元素是否参与的最大值
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      // 如果找到了目标和的一半,则返回 true
      if (dp[j] === sum / 2) {
        return true;
      }
    }
  }
  // 如果遍历完毕都没有找到目标和的一半,则返回 false
  return dp[sum / 2] === sum / 2;
};
// const nums = [1, 1]
// console.log(canPartition(nums));
//leetcode submit region end(Prohibit modification and deletion)
