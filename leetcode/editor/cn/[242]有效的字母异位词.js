//给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。 
//
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。 
//
// 
//
// 示例 1: 
//
// 
//输入: s = "anagram", t = "nagaram"
//输出: true
// 
//
// 示例 2: 
//
// 
//输入: s = "rat", t = "car"
//输出: false 
//
// 
//
// 提示: 
//
// 
// 1 <= s.length, t.length <= 5 * 10⁴ 
// s 和 t 仅包含小写字母 
// 
//
// 
//
// 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？ 
//
// Related Topics 哈希表 字符串 排序 👍 926 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = {}
  for (const temp of s) {
    sMap[temp] = 1 + (sMap[temp] || 0);
  }
  for (const word of t) {
    if (!sMap[word]) {
      return false;
    }
    sMap[word] = sMap[word] - 1;
    if (sMap[word] === 0) {
      delete sMap[word];
    }
  }
  return Object.keys(sMap).length === 0;
};
// const s = 'aa', t = 'a'
// console.log(isAnagram(s, t))
//leetcode submit region end(Prohibit modification and deletion)
