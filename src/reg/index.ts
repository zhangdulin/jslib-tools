/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-21 19:52:26
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 14:39:58
 * @Description: 
 */
/**
 * @description: 常用正则 cellPhone手机号码验证;landline座机;email邮件验证;domain网址验证 不精确到后缀; pwd 密码由数字和字母6-16位
 * @param {*}
 * @return {*}
 */

export const Regs = {
  cellPhone: /^1[3456789][0-9]{9}$/, // 手机号码验证
  pwd: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/, // 密码由数字和字母6-16位
  landline: /^[0-9]{6,16}$/, // 座机
  email: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, // 邮件验证
  url: /^((https|http|ftp|rtsp|mms)?:\/\/)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/, // 网址验证 不精确到后缀
  chinese: /^[\u4e00-\u9fa5]+$/, // 中文
  integer: /^-?\d+$/, // 整数
  floatplus: /^\d+(\.\d+)?$/, // 非负浮点数（正浮点数 + 0）
  floatminus: /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/, // 非正浮点数（负浮点数 - 0）
}
