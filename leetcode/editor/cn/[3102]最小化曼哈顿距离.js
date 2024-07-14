//给你一个下标从 0 开始的数组 points ，它表示二维平面上一些点的整数坐标，其中 points[i] = [xi, yi] 。 
//
// 两点之间的距离定义为它们的曼哈顿距离。 
//
// 请你恰好移除一个点，返回移除后任意两点之间的 最大 距离可能的 最小 值。 
//
// 
//
// 示例 1： 
//
// 
//输入：points = [[3,10],[5,15],[10,2],[4,4]]
//输出：12
//解释：移除每个点后的最大距离如下所示：
//- 移除第 0 个点后，最大距离在点 (5, 15) 和 (10, 2) 之间，为 |5 - 10| + |15 - 2| = 18 。
//- 移除第 1 个点后，最大距离在点 (3, 10) 和 (10, 2) 之间，为 |3 - 10| + |10 - 2| = 15 。
//- 移除第 2 个点后，最大距离在点 (5, 15) 和 (4, 4) 之间，为 |5 - 4| + |15 - 4| = 12 。
//- 移除第 3 个点后，最大距离在点 (5, 15) 和 (10, 2) 之间的，为 |5 - 10| + |15 - 2| = 18 。
//在恰好移除一个点后，任意两点之间的最大距离可能的最小值是 12 。
// 
//
// 示例 2： 
//
// 
//输入：points = [[1,1],[1,1],[1,1]]
//输出：0
//解释：移除任一点后，任意两点之间的最大距离都是 0 。
// 
//
// 
//
// 提示： 
//
// 
// 3 <= points.length <= 10⁵ 
// points[i].length == 2 
// 1 <= points[i][0], points[i][1] <= 10⁸ 
// 
//
// Related Topics 几何 数组 数学 有序集合 排序 👍 30 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var minimumDistance = function (points) {
  let max = Number.MAX_VALUE;
  const getFar = ([x1, y1], [x2, y2]) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
  const arr = [];
  for (let i = 0; i < points.length - 1; i++) {
    arr.push(getFar(points[i], points[i + 1]));
  }
  const sortArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < points.length - 1; i++) {
    const left = arr[i - 1] || 0;
    const right = arr[i] || 0;
    let noCurrentPoint = 0;
    if (points[i - 1] && points[i + 1]) {
      noCurrentPoint = getFar(points[i - 1], points[i + 1]);
    }
    const res = [];
    if (sortArr[0] !== left && sortArr[0] !== right) {
      res.push(sortArr[0])
    }
    if (sortArr[1] !== left && sortArr[1] !== right) {
      res.push(sortArr[1])
    }
    res.push(noCurrentPoint);
    res.push(sortArr[2]||0);
    max = Math.min(max, Math.max(...res));
  }
  return max;
};
// const points = [[3, 2], [3, 9], [7, 10], [4, 4], [8, 10], [2, 7]];
// console.log(minimumDistance(points));
//leetcode submit region end(Prohibit modification and deletion)
