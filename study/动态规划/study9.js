// https://leetcode.cn/problems/partition-equal-subset-sum/
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
//
//
//
// 示例 1：
//
// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 示例 2：
//
// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((a, b) => a + b);
  const length = nums.length;
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const dp = new Array(target).fill(0);
  // for (let i = 0; i < length; i++) {
  //   dp[i] = nums[i] > target ? 0 : nums[i];
  // }
  for (let i = 0; i < length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      const temp = dp[j - 1] + nums[i] || 0;
      console.log('不放物品价值', temp);
      dp[j] = Math.max(dp[j], temp);
      if (dp[j] === target) {
        return true;
      }
    }
    console.log(dp);
  }
  return false;
};
const temp = [1, 5, 11, 5]
console.log(canPartition(temp));