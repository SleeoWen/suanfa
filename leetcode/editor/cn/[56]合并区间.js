//以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返
//回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。 
//
// 
//
// 示例 1： 
//
// 
//输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
//输出：[[1,6],[8,10],[15,18]]
//解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 
//
// 示例 2： 
//
// 
//输入：intervals = [[1,4],[4,5]]
//输出：[[1,5]]
//解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。 
//
// 
//
// 提示： 
//
// 
// 1 <= intervals.length <= 10⁴ 
// intervals[i].length == 2 
// 0 <= starti <= endi <= 10⁴ 
// 
//
// Related Topics 数组 排序 👍 2354 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let res = []
  let left = 0;
  let right = 0;
  const length = intervals.length;
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      left = intervals[i][0];
      right = intervals[i][1];
    } else if (intervals[i][0] <= right) {
      right = Math.max(right, intervals[i][1]);
    } else {
      res.push([left, right]);
      left = intervals[i][0];
      right = intervals[i][1];
    }
    if (i === length - 1) {
      res.push([left, right]);
    }
  }
  return res;
};
const temp = [[1, 3]];
console.log(merge(temp));
//leetcode submit region end(Prohibit modification and deletion)
