//传统递归
const feibo = (n) => {
  if (n === 1 || n === 2) {
    return 1
  }
  return feibo(n - 1) + feibo(n - 2)
}
console.log(feibo(5));
//动态规划
const feibo2 = (n) => {
  let arr = new Array(n).fill(0)
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n - 1]
}