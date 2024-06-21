var combine = function (n, k) {
  // 回溯法
  let result = [],
    path = [];
  let backtracking = (_n, _k, startIndex) => {
    // 终止条件
    if (path.length === _k) {
      result.push(path.slice());
      return;
    }
    // 循环本层集合元素
    for (let i = startIndex; i <= _n; i++) {
      path.push(i);
      //   递归
      backtracking(_n, _k, i + 1);
      //   回溯操作
      path.pop();
    }
  };
  backtracking(n, k, 1);
  return result;
};
// const n = 4, k = 2;
// console.log(combine(n, k));