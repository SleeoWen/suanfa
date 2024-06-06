// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  const length = nums.length;
  const temp = new Array(length);
  nums.forEach((item, index) => {
    temp[(index + k) % length] = item;
  })
  for (let i = 0; i < length; i++) {
    nums[i] = temp[i];
  }
};