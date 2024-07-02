//给你一个整数数组 nums。 
//
// 返回两个（不一定不同的）质数在 nums 中 下标 的 最大距离。 
//
// 
//
// 示例 1： 
//
// 
// 输入： nums = [4,2,9,5,3] 
// 
//
// 输出： 3 
//
// 解释： nums[1]、nums[3] 和 nums[4] 是质数。因此答案是 |4 - 1| = 3。 
//
// 示例 2： 
//
// 
// 输入： nums = [4,8,2,8] 
// 
//
// 输出： 0 
//
// 解释： nums[2] 是质数。因为只有一个质数，所以答案是 |2 - 2| = 0。 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 3 * 10⁵ 
// 1 <= nums[i] <= 100 
// 输入保证 nums 中至少有一个质数。 
// 
//
// Related Topics 数组 数学 数论 👍 17 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
const getNumber = (num) => {
  if (num === 2 || num === 3) {
    return true;
  }
  if (num === 1 || num % 2 === 0) {
    return false;
  }
  const temp = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= temp; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
  const map = new Map();
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let isFormat = false;
    if (map.get(nums[i]) === undefined) {
      map.set(nums[i], getNumber(nums[i]));
    }
    isFormat = map.get(nums[i]);
    if (isFormat) {
      res.push(i);
    }
  }
  if (res.length >= 2) {
    return res[res.length - 1] - res[0];
  }
  return 0
};
//leetcode submit region end(Prohibit modification and deletion)
// console.log(maximumPrimeDifference([4, 2, 9, 5, 3]));