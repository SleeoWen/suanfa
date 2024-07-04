//给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。 
//
// 
//
// 示例 1： 
// 
// 
//输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
//输出：[1,2,3,6,9,8,7,4,5]
// 
//
// 示例 2： 
// 
// 
//输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//输出：[1,2,3,4,8,12,11,10,9,5,6,7]
// 
//
// 
//
// 提示： 
//
// 
// m == matrix.length 
// n == matrix[i].length 
// 1 <= m, n <= 10 
// -100 <= matrix[i][j] <= 100 
// 
//
// Related Topics 数组 矩阵 模拟 👍 1708 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let left = 0;//四个边界
  let right = matrix[0].length-1;
  let top = 0;
  let bottom = matrix.length-1;
  let res = [];//存储结果
  while(true){
    for(let i=left;i<=right;i++){
      res.push(matrix[top][i]);
    }
    top++;
    if(top>bottom)break;//四个边，每个边结束都判断是否终止
    for(let i=top;i<=bottom;i++){
      res.push(matrix[i][right]);
    }
    right--;
    if(right<left)break;
    for(let i=right;i>=left;i--){
      res.push(matrix[bottom][i]);
    }
    bottom--;
    if(bottom<top) break;
    for(let i=bottom;i>=top;i--){
      res.push(matrix[i][left]);
    }
    left++;
    if(left>right) break;
  }
  return res;
};


//leetcode submit region end(Prohibit modification and deletion)
