//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。 
//
// 有效字符串需满足： 
//
// 
// 左括号必须用相同类型的右括号闭合。 
// 左括号必须以正确的顺序闭合。 
// 每个右括号都有一个对应的相同类型的左括号。 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "()"
//输出：true
// 
//
// 示例 2： 
//
// 
//输入：s = "()[]{}"
//输出：true
// 
//
// 示例 3： 
//
// 
//输入：s = "(]"
//输出：false
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 10⁴ 
// s 仅由括号 '()[]{}' 组成 
// 
//
// Related Topics 栈 字符串 👍 4456 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = s.split('')
  const temp = [];
  const map = {
    '(': ')', '[': ']', '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      temp.push(map[s[i]]);
    } else {
      if (temp[temp.length - 1] === s[i]) {
        temp.splice(temp.length - 1, 1)
      } else {
        return false;
      }
    }
//leetcode submit region end(Prohibit modification and deletion))
  }
  return temp.length === 0;
};
// const s = "()"
// console.log(isValid(s));
//leetcode submit region end(Prohibit modification and deletion)
