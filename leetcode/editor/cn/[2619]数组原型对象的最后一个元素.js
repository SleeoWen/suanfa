//请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，这个方法将返回数组最后一个元素。如果数组中没有元素，则返回 -1 。
// 
//
// 你可以假设数组是 JSON.parse 的输出结果。 
//
// 
//
// 示例 1 ： 
//
// 
//输入：nums = [null, {}, 3]
//输出：3
//解释：调用 nums.last() 后返回最后一个元素： 3。
// 
//
// 示例 2 ： 
//
// 
//输入：nums = []
//输出：-1
//解释：因为此数组没有元素，所以应该返回 -1。
// 
//
// 
//
// 提示： 
//
// 
// arr 是一个有效的 JSON 数组 
// 0 <= arr.length <= 1000 
// 
//
// 👍 29 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1]
  }
  return -1
};
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
// const arr = [1, 2, 3];
// console.log(arr.last());
; // 3
//leetcode submit region end(Prohibit modification and deletion)
