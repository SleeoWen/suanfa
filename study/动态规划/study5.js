// https://leetcode.cn/problems/unique-paths-ii/description/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m).fill(new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    let xZero = false;
    let yZero = false;
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (obstacleGrid[i][j] === 1) {
          dp[i][j] = 0;
          yZero = true;
        } else {
          dp[i][j] = yZero ? 0 : 1;
        }
      }else if (j === 0) {
        if (obstacleGrid[i][j] === 1) {
          dp[i][j] = 0;
          xZero = true;
        } else {
          dp[i][j] = xZero ? 0 : 1;
        }
      }else {
        console.log(obstacleGrid[i][j]);
        dp[i][j] = obstacleGrid[i][j] !== 1 ? dp[i - 1][j] + dp[i][j - 1] : 0;
      }
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
};
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));