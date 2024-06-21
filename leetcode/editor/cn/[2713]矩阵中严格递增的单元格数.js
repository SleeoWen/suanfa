/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const g = new Map();

  // 将相同元素的坐标放在同一组
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const x = mat[i][j];
      if (!g.has(x)) {
        g.set(x, []);
      }
      g.get(x).push([i, j]);
    }
  }

  const rowMax = new Array(m).fill(0);
  const colMax = new Array(n).fill(0);

  // 按照元素值排序
  const sortedGroups = Array.from(g.entries()).sort((a, b) => a[0] - b[0]);

  for (const [_, pos] of sortedGroups) {
    // 先把最大值算出来
    const mx = pos.map(([i, j]) => Math.max(rowMax[i], colMax[j]) + 1);

    // 再更新 rowMax 和 colMax
    pos.forEach(([i, j], index) => {
      const f = mx[index];
      rowMax[i] = Math.max(rowMax[i], f);
      colMax[j] = Math.max(colMax[j], f);
    });
  }

  return Math.max(...rowMax);
};

