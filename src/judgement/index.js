/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-22 10:40:09
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 17:04:17
 * @Description: 
 */
//Node.js中闭包外部this并非global eg:(function(g){})(this); //this not global
//严格模式下this不指向全局变量
var GLOBAL = typeof global == "object" ? global : window,

  toString = Object.prototype.toString,
  has = Object.prototype.hasOwnProperty,
  slice = Array.prototype.slice;

//严格模式与window识别检测
//2018/10/10: uglify压缩会导致此检测函数失效
//function detect_strict_mode() {
//    var f = function (arg) {
//        arguments[0] = 1;

//        return arg != arguments[0];
//    };

//    return f(0);
//}

//默认严格模式,不再通过检测判断
var is_strict_mode = true, //detect_strict_mode(),
  is_window_mode = GLOBAL == GLOBAL.window;

/**
 * 获取数据类型(小写) undefined|null|string|number|array|function|date|regexp|window|node|list
 * @param {object} obj 要检测的数据
 */
export function getType(obj) {
  if (obj == undefined) return "" + obj;

  //内置函数,性能最好 (注意：safari querySelectorAll返回值类型为function)
  if (typeof obj !== "object" && typeof obj !== "function") return typeof obj;

  //非window模式(Node)下禁用以下检测
  if (is_window_mode) {
    if (typeof obj.nodeType === "number") return "node";

    if (typeof obj.length === "number") {
      //严格模式禁止使用 arguments.callee,调用会报错
      //IE9+等使用 toString.call 会返回 [object Arguments],此为兼容低版本IE
      //if (!is_strict_mode && obj.callee) return "arguments";

      //IE9+等使用 toString.call 会返回 [object Window],此为兼容低版本IE
      if (obj == obj.window) return "window";

      //document.getElementsByTagName("*") => HTMLCollection
      //document.querySelectorAll("*")     => NodeList
      //此处统一为 list
      if (obj.item) return "list";
    }
  }

  //在某些最新的浏览器中(IE11、Firefox、Chrome)性能与hash读取差不多 eg: return class2type[toString.call(obj)];
  return toString.call(obj).slice(8, -1).toLowerCase();
}

/**
 * 检测是否为函数
 * @param {object} fn 要检测的数据
 */
export function isFunc(fn) {
  //在IE11兼容模式（ie6-8）下存在bug,当调用次数过多时可能返回不正确的结果
  //return typeof fn == "function";

  return toString.call(fn) === "[object Function]" || toString.call(fn) === "[object AsyncFunction]";
}

/**
 * 检测是否为对象
 * @param {object} obj 要检测的数据
 */
export function isObject(obj) {
  //typeof null => object
  //toString.call(null) => [object Object]

  return obj && toString.call(obj) === "[object Object]";
}

/**
 * 检测是否为数组
 * @param {object} obj 要检测的数据
 */
export function isArray(obj) {
  return toString.call(obj) === "[object Array]";
}

/**
 * 检测是否为数组或类数组
 * @param {object} obj 要检测的数据
 */
export function isArrayLike(obj) {
  var type = getType(obj);

  return type == "array" || type == "list" || type == "arguments";
}

/**
 * 若value不为undefine,则返回value;否则返回defValue
 * @param {object} value 
 * @param {object} defValue value不存在时返回的值
 */
export function def(value, defValue) {
  return value !== undefined ? value : defValue;
}

/**
 * 检测是否是符合条件的数字(n必须为数字类型)
 * @param {number} n 数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 * @param {number|undefined} max_decimal_len 最大小数位数
 */
export function isNum(n, min, max, max_decimal_len) {
  if (typeof n != "number" || isNaN(n)) return false;

  if (min != undefined && n < min) return false;
  if (max != undefined && n > max) return false;

  if (max_decimal_len) {
    var l = ((n + '').split('.')[1] || '').length;
    if (l > max_decimal_len) return false;
  }

  return true;
}

/**
 * 检测是否为大于0的数字(n必须为数字类型)
 * @param {number} n 数字
 */
export function isUNum(n) {
  return !isNaN(n) && n > 0;
}

/**
 * 检测是否为整数(n必须为数字类型)
 * @param {number} n 数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 */
export function isInt(n, min, max) {
  return isNum(n, min, max) && n === Math.floor(n);
}

/**
 * 检测是否为大于0的整数
 * @param {number} n 数字
 */
export function isUInt(n) {
  return isInt(n, 1);
}

/**
 * 判断是否是符合条件的数字
 * @param {string|number} str 要检测的字符串或数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 * @param {number|undefined} max_decimal_len 最大小数位数
 */
export function checkNum(str, min, max, max_decimal_len) {
  if (typeof str == "number") return isNum(str, min, max, max_decimal_len);
  if (typeof str == "string") {
    str = str.trim();
    return str && isNum(+str, min, max, max_decimal_len);
  }
  return false;
}

/**
 * 判断是否是符合条件的整数
 * @param {string|number} str 要检测的字符串或数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 */
export function checkInt(str, min, max) {
  if (typeof str == "number") return isInt(str, min, max);
  if (typeof str == "string") {
    str = str.trim();
    return str && isInt(+str, min, max);
  }
  return false;
}


export default {
  getType,
  isArrayLike,
  isArray,
  isObject,
  def,
  isNum,
  isUNum,
  isFunc,
  isInt,
  isUInt,
  checkNum,
  checkInt
}