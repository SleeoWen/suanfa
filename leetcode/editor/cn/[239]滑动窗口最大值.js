//给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位
//。 
//
// 返回 滑动窗口中的最大值 。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
//输出：[3,3,5,5,6,7]
//解释：
//滑动窗口的位置                最大值
//---------------               -----
//[1  3  -1] -3  5  3  6  7       3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7
// 
//
// 示例 2： 
//
// 
//输入：nums = [1], k = 1
//输出：[1]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 10⁵ 
// -10⁴ <= nums[i] <= 10⁴ 
// 1 <= k <= nums.length 
// 
//
// Related Topics 队列 数组 滑动窗口 单调队列 堆（优先队列） 👍 2800 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var maxSlidingWindow = function (nums, k) {
  class Queue {
    constructor() {
      this.list = [];
    }

    list = [];

    add(val) {
      let last = this.list[this.list.length - 1];
      while (last !== undefined && last < val) {
        this.list.pop();
        last = this.list[this.list.length - 1];
      }
      this.list.push(val);
    }

    delete(val) {
      if (this.list[0] === val) {
        this.list.shift();
      }
    }

    getMax() {
      return this.list[0];
    }
  }
  const res = []
  let queue = new Queue();
  let i = 0, j = 0;
  while (j < k) {
    queue.add(nums[j++]);
  }
  res.push(queue.getMax());
  while (j < nums.length) {
    queue.add(nums[j++]);
    queue.delete(nums[i++]);
    res.push(queue.getMax());
  }
  return res;
};
// const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// console.log(maxSlidingWindow(nums, k));
//leetcode submit region end(Prohibit modification and deletion)
