//给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。 
//
// candidates 中的每个数字在每个组合中只能使用 一次 。 
//
// 注意：解集不能包含重复的组合。 
//
// 
//
// 示例 1: 
//
// 
//输入: candidates = [10,1,2,7,6,1,5], target = 8,
//输出:
//[
//[1,1,6],
//[1,2,5],
//[1,7],
//[2,6]
//] 
//
// 示例 2: 
//
// 
//输入: candidates = [2,5,2,1,2], target = 5,
//输出:
//[
//[1,2,2],
//[5]
//] 
//
// 
//
// 提示: 
//
// 
// 1 <= candidates.length <= 100 
// 1 <= candidates[i] <= 50 
// 1 <= target <= 30 
// 
//
// Related Topics 数组 回溯 👍 1554 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const getRes = (start, sum) => {
    if (sum <= 0) {
      return [];
    }
    const res = [];
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] === sum) {
        res.push([candidates[i]]);
      } else {
        const temp = getRes(i + 1, sum - candidates[i]);
        if (temp.length > 0) {
          res.push(...temp.map(item => [candidates[i], ...item]));
        }
      }
    }
    return res;
  };
  return getRes(0, target);
};
//leetcode submit region end(Prohibit modification and deletion)
