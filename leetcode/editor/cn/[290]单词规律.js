//给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。 
//
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。 
//
// 
//
// 示例1: 
//
// 
//输入: pattern = "abba", s = "dog cat cat dog"
//输出: true 
//
// 示例 2: 
//
// 
//输入:pattern = "abba", s = "dog cat cat fish"
//输出: false 
//
// 示例 3: 
//
// 
//输入: pattern = "aaaa", s = "dog cat cat dog"
//输出: false 
//
// 
//
// 提示: 
//
// 
// 1 <= pattern.length <= 300 
// pattern 只包含小写英文字母 
// 1 <= s.length <= 3000 
// s 只包含小写英文字母和 ' ' 
// s 不包含 任何前导或尾随对空格 
// s 中每个单词都被 单个空格 分隔 
// 
//
// Related Topics 哈希表 字符串 👍 654 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sArr = s.split(' ')
  const p2s = {}, s2p = {}
  console.log(sArr)
  if(pattern.length !== sArr.length) return false
  for(let i = 0; i < pattern.length; i++) {
    const x = pattern[i], y = sArr[i] + '123'
    if(p2s[x] && p2s[x] !== y) return false
    if(s2p[y] && s2p[y] !== x) return false
    p2s[x] = y
    s2p[y] = x
  }
  return true
};

//leetcode submit region end(Prohibit modification and deletion)
