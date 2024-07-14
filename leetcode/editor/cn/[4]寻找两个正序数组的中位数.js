//给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
//
// 算法的时间复杂度应该为 O(log (m+n)) 。
//
//
//
// 示例 1：
//
//
//输入：nums1 = [1,3], nums2 = [2]
//输出：2.00000
//解释：合并数组 = [1,2,3] ，中位数 2
//
//
// 示例 2：
//
//
//输入：nums1 = [1,2], nums2 = [3,4]
//输出：2.50000
//解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
//
//
//
//
//
//
// 提示：
//
//
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -10⁶ <= nums1[i], nums2[i] <= 10⁶
//
//
// Related Topics 数组 二分查找 分治 👍 7167 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * 寻找两个正序数组的中位数
 * @param {number[]} nums1 第一个正序数组
 * @param {number[]} nums2 第二个正序数组
 * @return {number} 两个数组的中位数
 */
function findMedianSortedArrays(nums1, nums2) {
  // 获取两个数组的长度
  let m = nums1.length;
  let n = nums2.length;
  // 如果第一个数组的长度大于第二个数组的长度，交换两个数组，保证 nums1 的长度小于 nums2 的长度
  if (m > n) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
    let tmp = m;
    m = n;
    n = tmp;
  }

  // 初始化二分查找的左右边界
  let iMin = 0;
  let iMax = m;

  // 计算中间位置
  let halfLen = Math.floor((m + n + 1) / 2);

  while (iMin <= iMax) {
    // 在 nums1 中进行二分查找
    let i = Math.floor((iMin + iMax) / 2);
    // 计算 j 的值
    let j = halfLen - i;

    // 如果 i 不是 nums1 的最后一个元素，并且 nums1[i] 小于 nums2[j - 1]，说明 i 的值小了，需要在右半部分查找
    if (i < iMax && nums2[j - 1] > nums1[i]) {
      iMin = i + 1;
      // 如果 i 不是 nums1 的第一个元素，并且 nums1[i - 1] 大于 nums2[j]，说明 i 的值大了，需要在左半部分查找
    } else if (i > iMin && nums1[i - 1] > nums2[j]) {
      iMax = i - 1;
    } else {
      // 计算左边最大值
      let maxLeft;
      if (i === 0) {
        maxLeft = nums2[j - 1];
      } else if (j === 0) {
        maxLeft = nums1[i - 1];
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      // 如果两个数组的长度之和是奇数，直接返回左边最大值
      if ((m + n) % 2 === 1) {
        return maxLeft;
      }

      // 计算右边最小值
      let minRight;
      if (i === m) {
        minRight = nums2[j];
      } else if (j === n) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }

      // 返回左右两边最大值和最小值的平均值
      return (maxLeft + minRight) / 2;
    }
  }
}
//leetcode submit region end(Prohibit modification and deletion)
