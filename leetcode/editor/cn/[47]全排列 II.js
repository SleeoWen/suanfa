//给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [1,1,2]
//输出：
//[[1,1,2],
// [1,2,1],
// [2,1,1]]
// 
//
// 示例 2： 
//
// 
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 8 
// -10 <= nums[i] <= 10 
// 
//
// Related Topics 数组 回溯 👍 1579 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  let path = []
  nums.sort((a, b) => a - b)
  const backtracking = (usedList) => {
    if (path.length === nums.length) {
      res.push([...path])
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !usedList[i - 1]) {
        continue;
      }
      if (!usedList[i]) {
        usedList[i] = true
        path.push(nums[i])
        backtracking(usedList)
        path.pop()
        usedList[i] = false
      }
    }
  }
  backtracking(new Array(nums.length).fill(false))
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
