/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-08 09:50:14
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-08 10:02:35
 * @Description: 
 */

import { getType } from '../judgement/index'

var slice = Array.prototype.slice;

/**
 * 转为数组
 * @param {Array|NodeList} obj 数组或类数组
 * @param {number} from 开始索引,默认为0
 */
export function toArray(obj, from) {
  var tmp = [];

  for (var i = from || 0, len = obj.length; i < len; i++) {
    tmp.push(obj[i]);
  }

  return tmp;
}

//将 NodeList 转为 Array
var makeArrayNode = (function () {
  try {
    slice.call(document.documentElement.childNodes);

    return function (obj, from) {
      return slice.call(obj, from);
    }
  } catch (e) {
    return toArray;
  }
})();

/**
 * 将类数组对象转为数组,若对象不存在,则返回空数组
 * @param {Array|arguments|NodeList} obj 数组或类数组
 * @param {number} from 开始索引,默认为0
 */
export function makeArray(obj, from) {
  if (obj == undefined) return [];

  switch (getType(obj)) {
    case "array": return from ? obj.slice(from) : obj;
    case "list": return makeArrayNode(obj, from);
    case "arguments": return slice.call(obj, from);
  }

  return [obj];
}
