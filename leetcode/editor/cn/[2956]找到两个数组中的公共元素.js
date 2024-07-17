//给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，它们分别含有 n 和 m 个元素。请你计算以下两个数值：
//
//
// answer1：使得 nums1[i] 在 nums2 中出现的下标 i 的数量。
// answer2：使得 nums2[i] 在 nums1 中出现的下标 i 的数量。
//
//
// 返回 [answer1, answer2]。
//
//
//
// 示例 1：
//
//
// 输入：nums1 = [2,3,2], nums2 = [1,2]
//
//
// 输出：[2,1]
//
// 解释：
//
//
//
// 示例 2：
//
//
// 输入：nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
//
//
// 输出：[3,4]
//
// 解释：
//
// nums1 中下标在 1，2，3 的元素在 nums2 中也存在。所以 answer1 为 3。
//
// nums2 中下标在 0，1，3，4 的元素在 nums1 中也存在。所以 answer2 为 4。
//
// 示例 3：
//
//
// 输入：nums1 = [3,4,2,3], nums2 = [1,5]
//
//
// 输出：[0,0]
//
// 解释：
//
// nums1 和 nums2 中没有相同的数字，所以答案是 [0,0]。
//
//
//
// 提示：
//
//
// n == nums1.length
// m == nums2.length
// 1 <= n, m <= 100
// 1 <= nums1[i], nums2[i] <= 100
//
//
// Related Topics 数组 哈希表 👍 20 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let answer1 = 0;
  let answer2 = 0;

  // 创建 nums1 的哈希表
  const nums1Map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    nums1Map.set(nums1[i], i);
  }

  // 遍历 nums2, 检查每个元素是否在 nums1 的哈希表中
  for (let i = 0; i < nums2.length; i++) {
    if (nums1Map.has(nums2[i])) {
      answer2++;
    }
  }

  // 创建 nums2 的哈希表
  const nums2Map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    nums2Map.set(nums2[i], i);
  }

  // 遍历 nums1, 检查每个元素是否在 nums2 的哈希表中
  for (let i = 0; i < nums1.length; i++) {
    if (nums2Map.has(nums1[i])) {
      answer1++;
    }
  }

  return [answer1, answer2];
}
//leetcode submit region end(Prohibit modification and deletion)
