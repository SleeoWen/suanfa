//请你编写一段代码为所有数组实现 snail(rowsCount，colsCount) 方法，该方法将 1D 数组转换为以蜗牛排序的模式的 2D 数组。无效的
//输入值应该输出一个空数组。当 rowsCount * colsCount !==nums.length 时。这个输入被认为是无效的。 
//
// 蜗牛排序从左上角的单元格开始，从当前数组的第一个值开始。然后，它从上到下遍历第一列，接着移动到右边的下一列，并从下到上遍历它。将这种模式持续下去，每列交替
//变换遍历方向，直到覆盖整个数组。例如，当给定输入数组 [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 
//13, 11, 20, 4, 15] ，当 rowsCount = 5 且 colsCount = 4 时，需要输出矩阵如下图所示。注意，矩阵沿箭头方向对应于原
//数组中数字的顺序 
//
// 
//
// 
//
// 
//
// 示例 1： 
//
// 
//输入：
//nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
//
//rowsCount = 5
//colsCount = 4
//输出：
//[
// [19,17,16,15],
// [10,1,14,4],
// [3,2,12,20],
// [7,5,18,11],
// [9,8,6,13]
//]
// 
//
// 示例 2： 
//
// 
//输入：
//nums = [1,2,3,4]
//rowsCount = 1
//colsCount = 4
//输出：[[1, 2, 3, 4]]
// 
//
// 示例 3： 
//
// 
//输入：
//nums = [1,3]
//rowsCount = 2
//colsCount = 2
//输出：[]
//Explanation: 2 * 2 = 4, 且原数组 [1,3] 的长度为 2; 所以，输入是无效的。
// 
//
// 
//
// 提示： 
//
// 
// 0 <= nums.length <= 250 
// 1 <= nums[i] <= 1000 
// 1 <= rowsCount <= 250 
// 1 <= colsCount <= 250 
// 
//
// 👍 14 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return []
  }
  const res = Array.from(Array(rowsCount), () => Array(colsCount).fill(0));
  let row = 0;
  let col = 0;
  this.forEach((item) => {
    res[row][col] = item;
    if (col % 2 === 0) {
      row++
    } else {
      row--;
    }
    if (row >= rowsCount || row < 0) {
      col++
      if (row >= rowsCount) {
        row--;
      }
      if (row < 0) {
        row++;
      }
    }
  })
  return res;
}
/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
// const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
// arr.snail(5, 4); // [[1,2,3,4]]
//leetcode submit region end(Prohibit modification and deletion)
