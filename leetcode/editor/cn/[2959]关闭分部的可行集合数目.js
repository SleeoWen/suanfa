//一个公司在全国有 n 个分部，它们之间有的有道路连接。一开始，所有分部通过这些道路两两之间互相可以到达。
//
// 公司意识到在分部之间旅行花费了太多时间，所以它们决定关闭一些分部（也可能不关闭任何分部），同时保证剩下的分部之间两两互相可以到达且最远距离不超过
//maxDistance 。
//
// 两个分部之间的 距离 是通过道路长度之和的 最小值 。
//
// 给你整数 n ，maxDistance 和下标从 0 开始的二维整数数组 roads ，其中 roads[i] = [ui, vi, wi] 表示一条从
//ui 到 vi 长度为 wi的 无向 道路。
//
// 请你返回关闭分部的可行方案数目，满足每个方案里剩余分部之间的最远距离不超过 maxDistance。
//
// 注意，关闭一个分部后，与之相连的所有道路不可通行。
//
// 注意，两个分部之间可能会有多条道路。
//
//
//
// 示例 1：
//
//
//
//
//输入：n = 3, maxDistance = 5, roads = [[0,1,2],[1,2,10],[0,2,10]]
//输出：5
//解释：可行的关闭分部方案有：
//- 关闭分部集合 [2] ，剩余分部为 [0,1] ，它们之间的距离为 2 。
//- 关闭分部集合 [0,1] ，剩余分部为 [2] 。
//- 关闭分部集合 [1,2] ，剩余分部为 [0] 。
//- 关闭分部集合 [0,2] ，剩余分部为 [1] 。
//- 关闭分部集合 [0,1,2] ，关闭后没有剩余分部。
//总共有 5 种可行的关闭方案。
//
//
// 示例 2：
//
//
//
//
//输入：n = 3, maxDistance = 5, roads = [[0,1,20],[0,1,10],[1,2,2],[0,2,2]]
//输出：7
//解释：可行的关闭分部方案有：
//- 关闭分部集合 [] ，剩余分部为 [0,1,2] ，它们之间的最远距离为 4 。
//- 关闭分部集合 [0] ，剩余分部为 [1,2] ，它们之间的距离为 2 。
//- 关闭分部集合 [1] ，剩余分部为 [0,2] ，它们之间的距离为 2 。
//- 关闭分部集合 [0,1] ，剩余分部为 [2] 。
//- 关闭分部集合 [1,2] ，剩余分部为 [0] 。
//- 关闭分部集合 [0,2] ，剩余分部为 [1] 。
//- 关闭分部集合 [0,1,2] ，关闭后没有剩余分部。
//总共有 7 种可行的关闭方案。
//
//
// 示例 3：
//
//
//输入：n = 1, maxDistance = 10, roads = []
//输出：2
//解释：可行的关闭分部方案有：
//- 关闭分部集合 [] ，剩余分部为 [0] 。
//- 关闭分部集合 [0] ，关闭后没有剩余分部。
//总共有 2 种可行的关闭方案。
//
//
//
//
// 提示：
//
//
// 1 <= n <= 10
// 1 <= maxDistance <= 10⁵
// 0 <= roads.length <= 1000
// roads[i].length == 3
// 0 <= ui, vi <= n - 1
// ui != vi
// 1 <= wi <= 1000
// 一开始所有分部之间通过道路互相可以到达。
//
//
// Related Topics 位运算 图 枚举 最短路 堆（优先队列） 👍 13 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} maxDistance
 * @param {number[][]} roads
 * @return {number}
 */
var numberOfSets = function(n, maxDistance, roads) {
  let res = 0; // 结果变量,用于存储可行的关闭分部方案数目
  let opened = new Array(n).fill(0); // 一个长度为n的数组,用于记录当前状态下哪些分部是开启的

  for (let mask = 0; mask < (1 << n); mask++) { // 遍历所有可能的状态
    for (let i = 0; i < n; i++) {
      opened[i] = mask & (1 << i); // 根据当前状态mask,设置opened数组中各分部的开启状态
    }
    let d = new Array(n).fill(0).map(() => new Array(n).fill(1000000)); // 初始化距离矩阵d,所有距离初始化为无穷大

    for (let [i, j, r] of roads) { // 遍历所有道路,更新距离矩阵d
      if (opened[i] > 0 && opened[j] > 0) { // 如果两个分部都是开启的
        d[i][j] = d[j][i] = Math.min(d[i][j], r); // 更新两个分部之间的最短距离
      }
    }

    // 使用Floyd-Warshall算法更新距离矩阵d
    for (let k = 0; k < n; k++) {
      if (opened[k] > 0) { // 如果分部k是开启的
        for (let i = 0; i < n; i++) {
          if (opened[i] > 0) { // 如果分部i是开启的
            for (let j = i + 1; j < n; j++) {
              if (opened[j] > 0) { // 如果分部j是开启的
                d[i][j] = d[j][i] = Math.min(d[i][j], d[i][k] + d[k][j]); // 更新i到j的最短距离
              }
            }
          }
        }
      }
    }

    // 验证当前状态是否满足条件
    let good = 1;
    for (let i = 0; i < n; i++) {
      if (opened[i] > 0) { // 如果分部i是开启的
        for (let j = i + 1; j < n; j++) {
          if (opened[j] > 0 && d[i][j] > maxDistance) { // 如果分部j也是开启的,且两者之间的距离大于maxDistance
            good = 0; // 标记当前状态不满足条件
            break;
          }
        }
        if (good == 0) { // 如果已经发现不满足条件,退出当前循环
          break;
        }
      }
    }
    res += good; // 如果当前状态满足条件,则将结果加1
  }
  return res; // 返回最终的结果

};
//leetcode submit region end(Prohibit modification and deletion)
