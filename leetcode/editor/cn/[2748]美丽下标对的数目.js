//给你一个下标从 0 开始的整数数组 nums 。如果下标对 i、j 满足 0 ≤ i < j < nums.length ，如果 nums[i] 的 第一个
//数字 和 nums[j] 的 最后一个数字 互质 ，则认为 nums[i] 和 nums[j] 是一组 美丽下标对 。 
//
// 返回 nums 中 美丽下标对 的总数目。 
//
// 对于两个整数 x 和 y ，如果不存在大于 1 的整数可以整除它们，则认为 x 和 y 互质 。换而言之，如果 gcd(x, y) == 1 ，则认为 
//x 和 y 互质，其中 gcd(x, y) 是 x 和 y 的 最大公因数 。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [2,5,1,4]
//输出：5
//解释：nums 中共有 5 组美丽下标对：
//i = 0 和 j = 1 ：nums[0] 的第一个数字是 2 ，nums[1] 的最后一个数字是 5 。2 和 5 互质，因此 gcd(2,5) == 
//1 。
//i = 0 和 j = 2 ：nums[0] 的第一个数字是 2 ，nums[2] 的最后一个数字是 1 。2 和 1 互质，因此 gcd(2,1) == 
//1 。
//i = 1 和 j = 2 ：nums[1] 的第一个数字是 5 ，nums[2] 的最后一个数字是 1 。5 和 1 互质，因此 gcd(5,1) == 
//1 。
//i = 1 和 j = 3 ：nums[1] 的第一个数字是 5 ，nums[3] 的最后一个数字是 4 。5 和 4 互质，因此 gcd(5,4) == 
//1 。
//i = 2 和 j = 3 ：nums[2] 的第一个数字是 1 ，nums[3] 的最后一个数字是 4 。1 和 4 互质，因此 gcd(1,4) == 
//1 。
//因此，返回 5 。
// 
//
// 示例 2： 
//
// 
//输入：nums = [11,21,12]
//输出：2
//解释：共有 2 组美丽下标对：
//i = 0 和 j = 1 ：nums[0] 的第一个数字是 1 ，nums[1] 的最后一个数字是 1 。gcd(1,1) == 1 。
//i = 0 和 j = 2 ：nums[0] 的第一个数字是 1 ，nums[2] 的最后一个数字是 2 。gcd(1,2) == 1 。
//因此，返回 2 。 
//
// 
//
// 提示： 
//
// 
// 2 <= nums.length <= 100 
// 1 <= nums[i] <= 9999 
// nums[i] % 10 != 0 
// 
//
// Related Topics 数组 哈希表 数学 计数 数论 👍 31 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let res = 0;
  const isOk = (i, j) => {
    const gcd = (num1, num2) => {
      const temp = Math.min(num1, num2)
      for (let i = 2; i <= temp; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
          return false;
        }
      }
      return true;
    }
    const iFirst = Number(nums[i].toString().split('')[0]);
    const jLast = nums[j] % 10;
    return gcd(iFirst, jLast);
  }
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (isOk(i, j)) {
        // console.log(nums[i], nums[j]);
        res++;
      }
    }
  }
  return res;
};
// console.log(countBeautifulPairs([11, 21, 12]));
//leetcode submit region end(Prohibit modification and deletion)
