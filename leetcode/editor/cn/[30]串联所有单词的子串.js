//给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。 
//
// s 中的 串联子串 是指一个包含 words 中所有字符串以任意顺序排列连接起来的子串。 
//
// 
// 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，
//"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。 
// 
//
// 返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "barfoothefoobarman", words = ["foo","bar"]
//输出：[0,9]
//解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
//子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
//子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
//输出顺序无关紧要。返回 [9,0] 也是可以的。
// 
//
// 示例 2： 
//
// 
//输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
//输出：[]
//解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
//s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
//所以我们返回一个空数组。
// 
//
// 示例 3： 
//
// 
//输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
//输出：[6,9,12]
//解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
//子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
//子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
//子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 10⁴ 
// 1 <= words.length <= 5000 
// 1 <= words[i].length <= 30 
// words[i] 和 s 由小写英文字母组成 
// 
//
// Related Topics 哈希表 字符串 滑动窗口 👍 1122 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  /**
   * 该方案利用hashMap，将words中的所有单词转换为hashMap(key为单词，value
   * 单词出现的次数)。然后逐个遍历s中的字符，并以该字符开头组成单词(单词长度
   * 为words中的单词长度)，当该单词在hashMap中存在，则再定义一个hashMap记录
   * 该单词在s中出现的次数，并继续比对后续单词，当比对单词数量等于words中单词
   * 数量，且所有单词都在words中存在并没有超出重复次数，则该子串比对完成，添加
   * 记录开始索引，否则则比对失败，继续比对s后续字符。
   */

    // 将words数组转换为hashMap，key为数组元素，value为元素重复次数
  let wordsMap=new Map();
  for(let word of words)
  {
    let count=wordsMap.get(word);
    wordsMap.set(word,count==undefined?1:++count);
  }

  // 单词长度,由于全部单词长度一致，因此获取第一个即可
  let wordlength=words[0].length;
  // 所有单词拼接为字符串长度
  let concateWordLength=wordlength*words.length;
  // 定义输出数组
  let outArray=[];
  // 逐个遍历s中的字符，直到剩余字符数量小于所有单词拼接为字符串长度为止
  for(let index=0;index+concateWordLength<=s.length;index++)
  {
    // 当前开始比对的字符的索引
    let point=index;
    // 记录字符串s中已比对成功的单词出现的数量
    let countMap=new Map();
    while(1)
    {
      // 截取s中的单词
      let word=s.substr(point,wordlength);
      // 获取words的map中是否存在该单词，且重复数量是多少
      let isExist=wordsMap.get(word);
      // 如果words中没有该单词，证明无法匹配，直接跳出循环
      if(isExist==undefined)break;
      // 获取s中该单词已出现的次数，如果为undefined则未出现过
      let count=countMap.get(word);
      // 如果该单词出现次数已等于words中该单词的重复次数，证明
      // 无法匹配，直接跳出循环
      if(isExist==count)break;
      // 若该单词未出现过，则向countMap记录出现次数1；若该单词
      // 出现过，且重复次数小于words该单词的重复次数，则将次数+1
      // 记录
      countMap.set(word,count==undefined?1:++count);
      // 继续比对下一个单词
      point+=wordlength;
      // 当单词数量等于words中单词数量，证明比对完成且匹配，向
      // 输出数组添加索引，并跳出循环
      if(point-index==concateWordLength)
      {
        outArray.push(index);
        break;
      }
    }
  }
  // 返回结果
  return outArray;
};
//leetcode submit region end(Prohibit modification and deletion)
