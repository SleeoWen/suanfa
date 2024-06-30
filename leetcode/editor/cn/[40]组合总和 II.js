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
  const res = [],
    path = [], len = candidates.length;
  candidates.sort((a, b) => a - b);
  backtracking(0, 0);
  return res;

  function backtracking(sum, i) {
    if (sum === target) {
      res.push(Array.from(path));
      return;
    }
    for (let j = i; j < len; j++) {
      const n = candidates[j];
      if (j > i && candidates[j] === candidates[j - 1]) {
        //若当前元素和前一个元素相等
        //则本次循环结束，防止出现重复组合
        continue;
      }
      //如果当前元素值大于目标值-总和的值
      //由于数组已排序，那么该元素之后的元素必定不满足条件
      //直接终止当前层的递归
      if (n > target - sum) break;
      path.push(n);
      sum += n;
      backtracking(sum, j + 1);
      path.pop();
      sum -= n;
    }
  }
};
const candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
console.log(combinationSum2(candidates, target))
//leetcode submit region end(Prohibit modification and deletion)
