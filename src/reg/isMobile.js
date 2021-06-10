/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:00:00
 * @Description: 
 */
/**
 * 检查是否为正确手机号 1开头11位数字
 * @param {*} value 正则校验变量
 * @return {boolean} 正则校验结果
 */
 export function isMobile(value) {
  return /^[1][0-9]{10}$/.test(value);
}