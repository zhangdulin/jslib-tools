/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 15:22:05
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:21
 * @Description:
 */
/**
 * 判断字符串是否是十六进制的颜色值
 * @param {*} string string
 * @return {*} boolean
 */
export function isColor(value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}

// module.exports = isColor;