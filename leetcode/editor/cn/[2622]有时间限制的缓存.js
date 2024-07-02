//编写一个类，它允许获取和设置键-值对，并且每个键都有一个 过期时间 。 
//
// 该类有三个公共方法： 
//
// set(key, value, duration) ：接收参数为整型键 key 、整型值 value 和以毫秒为单位的持续时间 duration 。一旦 
//duration 到期后，这个键就无法访问。如果相同的未过期键已经存在，该方法将返回 true ，否则返回 false 。如果该键已经存在，则它的值和持续时间都
//应该被覆盖。 
//
// get(key) ：如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 -1 。 
//
// count() ：返回未过期键的总数。 
//
// 
//
// 示例 1： 
//
// 
//输入： 
//actions = ["TimeLimitedCache", "set", "get", "count", "get"]
//values = [[], [1, 42, 100], [1], [], [1]]
//timeDeays = [0, 0, 50, 50, 150]
//输出： [null, false, 42, 1, -1]
//解释：
//在 t=0 时，缓存被构造。
//在 t=0 时，添加一个键值对 (1: 42) ，过期时间为 100ms 。因为该值不存在，因此返回false。
//在 t=50 时，请求 key=1 并返回值 42。
//在 t=50 时，调用 count() ，缓存中有一个未过期的键。
//在 t=100 时，key=1 到期。
//在 t=150 时，调用 get(1) ，返回 -1，因为缓存是空的。
// 
//
// 示例 2： 
//
// 
//输入：
//actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
//values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
//timeDelays = [0, 0, 40, 50, 120, 200, 250]
//输出： [null, false, true, 50, 50, -1]
//解释：
//在 t=0 时，缓存被构造。
//在 t=0 时，添加一个键值对 (1: 42) ，过期时间为 50ms。因为该值不存在，因此返回false。
//当 t=40 时，添加一个键值对 (1: 50) ，过期时间为 100ms。因为一个未过期的键已经存在，返回 true 并覆盖这个键的旧值。
//在 t=50 时，调用 get(1) ，返回 50。
//在 t=120 时，调用 get(1) ，返回 50。
//在 t=140 时，key=1 过期。
//在 t=200 时，调用 get(1) ，但缓存为空，因此返回 -1。
//在 t=250 时，count() 返回0 ，因为缓存是空的，没有未过期的键。
// 
//
// 
//
// 提示： 
//
// 
// 0 <= key, value <= 10⁹ 
// 0 <= duration <= 1000 
// 1 <= actions.length <= 100 
// actions.length === values.length 
// actions.length === timeDelays.length 
// 0 <= timeDelays[i] <= 1450 
// actions[i] 是 "TimeLimitedCache"、"set"、"get" 和 "count" 中的一个。 
// 第一个操作始终是 "TimeLimitedCache" 而且一定会以 0 毫秒的延迟立即执行 
// 
//
// 👍 19 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
var TimeLimitedCache = function () {
  this.map = new Map();
  this.timeHandle = {};
};
/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const temp = !!this.map.get(key);
  if (temp) {
    clearTimeout(this.timeHandle[key]);
  }
  this.map.set(key, value);
  this.timeHandle[key] = setTimeout(() => {
    this.map.delete(key)
  }, duration)
  return temp;
};
/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.map.get(key) || -1;
};
/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.map.size;
};
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count()
//leetcode submit region end(Prohibit modification and deletion)
