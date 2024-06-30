
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = []
  let tmp = 0, tmpArr = []
  for (let word of words) {
    if (tmp + word.length > maxWidth) {
      res.push([...tmpArr])
      tmpArr = []
      tmp = 0
    }
    tmpArr.push(word)
    tmp += (word.length + 1)

  }
  if (tmpArr[0]) {
    res.push(tmpArr)
  }
  for (let i = 0; i < res.length; i++) {
    if (i < res.length - 1) {
      res[i] = beStr(res[i], maxWidth)
      continue
    }
    let k = res[i].length
    let tmp = ''
    for (let j = 0; j < k; j++) {
      tmp += res[i][j]
      if (j < k - 1) {
        tmp += ' '
      }
    }
    tmp += Array(maxWidth - tmp.length + 1).join(' ')
    res[i] = tmp
  }
  return res
};

function beStr(arr, max) {
  let wordLth = 0
  const n = arr.length
  if (n == 1) {
    return arr[0] + Array(max - arr[0].length + 1).join(' ')
  }
  for (let v of arr) {
    wordLth += v.length
  }
  if ((max - wordLth) % (n - 1) == 0) {
    return arr.join(Array((max - wordLth) / (n - 1) + 1).join(' '))
  }
  let k = (max - wordLth) % (n - 1)
  let m = Math.floor((max - wordLth) / (n - 1))
  let res = ''
  for (let i = 0; i < n; i++) {
    res += arr[i]
    if (i == n - 1) {
      break
    }
    if (i + 1 <= k) {
      res += Array(m + 2).join(' ')
    } else {
      res += Array(m + 1).join(' ')
    }
  }
  return res
}
