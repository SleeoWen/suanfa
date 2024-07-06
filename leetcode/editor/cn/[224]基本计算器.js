//给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。 
//
// 注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "1 + 1"
//输出：2
// 
//
// 示例 2： 
//
// 
//输入：s = " 2-1 + 2 "
//输出：3
// 
//
// 示例 3： 
//
// 
//输入：s = "(1+(4+5+2)-3)+(6+8)"
//输出：23
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 3 * 10⁵ 
// s 由数字、'+'、'-'、'('、')'、和 ' ' 组成 
// s 表示一个有效的表达式 
// '+' 不能用作一元运算(例如， "+1" 和 "+(2 + 3)" 无效) 
// '-' 可以用作一元运算(即 "-1" 和 "-(2 + 3)" 是有效的) 
// 输入中不存在两个连续的操作符 
// 每个数字和运行的计算将适合于一个有符号的 32位 整数 
// 
//
// Related Topics 栈 递归 数学 字符串 👍 1048 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // 存放所有的数字
  const nums = [];
  // 为了防止第一个数为负数,先往 nums 加个 0
  nums.push(0);
  // 将所有的空格去掉
  s = s.replace(/\s/g, '');
  // 存放所有的操作,包括 +/-
  const ops = [];
  const n = s.length;
  const cs = s.split('');
  for (let i = 0; i < n; i++) {
    const c = cs[i];
    if (c === '(') {
      ops.push(c);
    } else if (c === ')') {
      // 计算到最近一个左括号为止
      while (ops.length > 0) {
        const op = ops[ops.length - 1];
        if (op !== '(') {
          calc(nums, ops);
        } else {
          ops.pop();
          break;
        }
      }
    } else {
      if (isNum(c)) {
        let u = 0;
        let j = i;
        // 将从 i 位置开始后面的连续数字整体取出,加入 nums
        while (j < n && isNum(cs[j])) u = u * 10 + parseInt(cs[j++]);
        nums.push(u);
        i = j - 1;
      } else {
        if (i > 0 && (cs[i - 1] === '(' || cs[i - 1] === '+' || cs[i - 1] === '-')) {
          nums.push(0);
        }
        // 有一个新操作要入栈时,先把栈内可以算的都算了
        while (ops.length > 0 && ops[ops.length - 1] !== '(') calc(nums, ops);
        ops.push(c);
      }
    }
  }
  while (ops.length > 0) calc(nums, ops);
  return nums[nums.length - 1];
};

function calc(nums, ops) {
  if (nums.length < 2) return;
  if (ops.length === 0) return;
  const b = nums.pop(), a = nums.pop();
  const op = ops.pop();
  nums.push(op === '+' ? a + b : a - b);
}

function isNum(c) {
  return !isNaN(parseInt(c));
}

//leetcode submit region end(Prohibit modification and deletion)
