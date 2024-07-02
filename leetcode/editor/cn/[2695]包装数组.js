//创建一个名为 ArrayWrapper 的类，它在其构造函数中接受一个整数数组作为参数。该类应具有以下两个特性： 
//
// 
// 当使用 + 运算符将两个该类的实例相加时，结果值为两个数组中所有元素的总和。 
// 当在实例上调用 String() 函数时，它将返回一个由逗号分隔的括在方括号中的字符串。例如，[1,2,3] 。 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [[1,2],[3,4]], operation = "Add"
//输出：10
//解释：
//const obj1 = new ArrayWrapper([1,2]);
//const obj2 = new ArrayWrapper([3,4]);
//obj1 + obj2; // 10
// 
//
// 示例 2： 
//
// 
//输入：nums = [[23,98,42,70]], operation = "String"
//输出："[23,98,42,70]"
//解释：
//const obj = new ArrayWrapper([23,98,42,70]);
//String(obj); // "[23,98,42,70]"
// 
//
// 示例 3： 
//
// 
//输入：nums = [[],[]], operation = "Add"
//输出：0
//解释：
//const obj1 = new ArrayWrapper([]);
//const obj2 = new ArrayWrapper([]);
//obj1 + obj2; // 0
// 
//
// 
//
// 提示： 
//
// 
// 0 <= nums.length <= 1000 
// 0 <= nums[i] <= 1000 
// 注意：nums 是传递给构造函数的数组。 
// 
//
// 👍 4 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
  constructor(nums) {
    this.#nums = nums;
  }

  #nums;

  valueOf() {
    if (this.#nums.length === 0) {
      return 0
    }
    return this.#nums.reduce((a, b) => a + b)
  }

  toString() {
    return JSON.stringify(this.#nums)
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
//leetcode submit region end(Prohibit modification and deletion)
