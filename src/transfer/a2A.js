/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-08 09:50:14
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-08 09:53:46
 * @Description: 
 */

/**
  * 将字符串转为大写,若str不是字符串,则返回defValue
  * @param {string} str 字符串
  * @param {string} defValue str不是字符串时返回的值
  */
 export function toUpper(str, defValue) {
  return typeof str == "string" ? str.toUpperCase() : defValue;
}

/**
 * 将字符串转为小写,若str不是字符串,则返回defValue
 * @param {string} str 字符串
 * @param {string} defValue str不是字符串时返回的值
 */
export function toLower(str, defValue) {
  return typeof str == "string" ? str.toLowerCase() : defValue;
}
