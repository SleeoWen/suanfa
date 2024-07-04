//丑数是可以被 a 或 b 或 c 整除的 正整数 。 
//
// 给你四个整数：n 、a 、b 、c ，请你设计一个算法来找出第 n 个丑数。 
//
// 
//
// 示例 1： 
//
// 
//输入：n = 3, a = 2, b = 3, c = 5
//输出：4
//解释：丑数序列为 2, 3, 4, 5, 6, 8, 9, 10... 其中第 3 个是 4。 
//
// 示例 2： 
//
// 
//输入：n = 4, a = 2, b = 3, c = 4
//输出：6
//解释：丑数序列为 2, 3, 4, 6, 8, 9, 10, 12... 其中第 4 个是 6。
// 
//
// 示例 3： 
//
// 
//输入：n = 5, a = 2, b = 11, c = 13
//输出：10
//解释：丑数序列为 2, 4, 6, 8, 10, 11, 12, 13... 其中第 5 个是 10。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= n, a, b, c <= 10⁹ 
// 1 <= a * b * c <= 10¹⁸ 
// 本题结果在 [1, 2 * 10⁹] 的范围内 
// 
//
// Related Topics 数学 二分查找 组合数学 数论 👍 149 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
  // 先将数值转换为 BigInt 类型
  a = BigInt(a), b = BigInt(b), c = BigInt(c), n = BigInt(n);

  // BigInt 不能使用 Math 函数判断，所以自己写一个
  const min = (a, b, c) => {
    let m = a;
    if (m > b) {
      m = b;
    }
    if (m > c) {
      m = c;
    }

    return m;
  };
  // 求最小公倍数
  const gcd = (a, b) => {
    if (b === 0n) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  // 求最大公约数
  const lcm = (a, b) => {
    return a * b / gcd(a, b);
  };
  // 检查是否是丑数
  const check = (val) => {
    return val % a === 0n || val % b === 0n || val % c === 0n;
  };

  let r = n * min(a, b, c);
  let l = 0n;
  let a_b = lcm(a, b);
  let a_c = lcm(a, c);
  let b_c = lcm(b, c);
  let a_b_c = lcm(a_b, c);

  // 二分查找丑数
  while (l < r) {
    let mid = l + (r - l) / 2n;
    let count = mid / a + mid / b + mid / c - mid / a_b - mid / b_c - mid / a_c + mid / a_b_c;

    if (count === n) {
      // 当 count 等于 n 时还需要再判断是否为丑数，因为对于BigInt的除法来说， 4 / 2 和 5 / 2 的结果是相等的
      if (check(mid)) {
        return mid;
      } else {
        r = mid - 1n;
      }
    } if (count < n) {
      l = mid + 1n;
    } else {
      r = mid - 1n;
    }
  }

  return check(l) ? l : -1;

};
//leetcode submit region end(Prohibit modification and deletion)
