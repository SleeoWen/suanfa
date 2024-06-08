// https://leetcode.cn/problems/target-sum/description/
// 给你一个非负整数数组 nums 和一个整数 target 。
//
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
//
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
//
//
//
// 示例 1：
//
// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
// left+right=sum
  // left-right=target
  //left-(sum-left)=target
  // left=(sum+target)/2

  let sum = nums.reduce((a, b) => a + b, 0);
  if(Math.abs(target) > sum) {
    return 0;
  }
  if ((sum + target) % 2 !== 0) {
    return 0;
  }
  const half = (sum + target) / 2;
  //定义dp数组 装满容量为j的背包有dp[j]种方法
  let dp = new Array(half + 1).fill(0);
  dp[0] = 1;
  //dp公式 dp[j]+=dp[j-nums[i]]
  for (let i = 0; i < nums.length; i++) {
    for (let j = half; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[half];
};
const nums = [1, 1, 1, 1, 1], target = 3
console.log(findTargetSumWays(nums, target));