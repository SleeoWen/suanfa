//有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。 
//
// 
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 
//和 "192.168@1.1" 是 无效 IP 地址。 
// 
//
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新
//排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "25525511135"
//输出：["255.255.11.135","255.255.111.35"]
// 
//
// 示例 2： 
//
// 
//输入：s = "0000"
//输出：["0.0.0.0"]
// 
//
// 示例 3： 
//
// 
//输入：s = "101023"
//输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 20 
// s 仅由数字组成 
// 
//
// Related Topics 字符串 回溯 👍 1422 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
const isValid = (temp, start, end) => {
  const s = temp.slice(start, end + 1)
  if (s.length > 1 && s.startsWith('0')) {
    return false
  }
  return s <= 255 && s >= 0;
}
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []
  let path = [];
  const length = s.length;
  const getRes = (s, startIndex, times) => {
    if (startIndex >= length && times === 0) {
      res.push(path.join('.'));
    }
    for (let i = startIndex; i < length; i++) {
      if (isValid(s, startIndex, i) && times > 0) {
        path.push(s.slice(startIndex, i + 1));
        getRes(s, i + 1, times - 1);
        path.pop();
      }
    }
  }
  getRes(s, 0, 4)
  return res;
};
// const s = "25525511135";
// console.log(restoreIpAddresses(s));
//leetcode submit region end(Prohibit modification and deletion)
