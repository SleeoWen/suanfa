//给你一个正整数 n ，生成一个包含 1 到 n² 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。 
//
// 
//
// 示例 1： 
// 
// 
//输入：n = 3
//输出：[[1,2,3],[8,9,4],[7,6,5]]
// 
//
// 示例 2： 
//
// 
//输入：n = 1
//输出：[[1]]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= n <= 20 
// 
//
// Related Topics 数组 矩阵 模拟 👍 1288 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let num = 1;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      matrix[top][column] = num;
      num++;
    }
    for (let row = top + 1; row <= bottom; row++) {
      matrix[row][right] = num;
      num++;
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        matrix[bottom][column] = num;
        num++;
      }
      for (let row = bottom; row > top; row--) {
        matrix[row][left] = num;
        num++;
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  // console.table(matrix);
  return matrix;
};
const n = 6;
console.log(generateMatrix(n));
//leetcode submit region end(Prohibit modification and deletion)
