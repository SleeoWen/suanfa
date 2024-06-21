//给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != 
//k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请 
//
// 你返回所有和为 0 且不重复的三元组。 
//
// 注意：答案中不可以包含重复的三元组。 
//
// 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//解释：
//nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
//nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
//nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
//不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
//注意，输出的顺序和三元组的顺序并不重要。
// 
//
// 示例 2： 
//
// 
//输入：nums = [0,1,1]
//输出：[]
//解释：唯一可能的三元组和不为 0 。
// 
//
// 示例 3： 
//
// 
//输入：nums = [0,0,0]
//输出：[[0,0,0]]
//解释：唯一可能的三元组和为 0 。
// 
//
// 
//
// 提示： 
//
// 
// 3 <= nums.length <= 3000 
// -10⁵ <= nums[i] <= 10⁵ 
// 
//
// Related Topics 数组 双指针 排序 👍 6906 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [], len = nums.length
  // 将数组排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    let l = i + 1, r = len - 1, iNum = nums[i]
    // 数组排过序，如果第一个数大于0直接返回res
    if (iNum > 0) return res
    // 去重
    if (iNum == nums[i - 1]) continue
    while (l < r) {
      let lNum = nums[l], rNum = nums[r], threeSum = iNum + lNum + rNum
      // 三数之和小于0，则左指针向右移动
      if (threeSum < 0) l++
      else if (threeSum > 0) r--
      else {
        res.push([iNum, lNum, rNum])
        // 去重
        while (l < r && nums[l] == nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] == nums[r - 1]) {
          r--
        }
        l++
        r--
      }
    }
  }
  return res
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//leetcode submit region end(Prohibit modification and deletion)
