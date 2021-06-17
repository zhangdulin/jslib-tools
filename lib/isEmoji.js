/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-11 11:07:35
 * @Description: 
 */
/**
 * 检查是否是emoji表情
 * @param {*} value 正则校验变量
 * @return {boolean} 正则校验结果 true: 是emoji表情 false: 不是emoji表情
 */
 export function isEmoji(value) {
  var arr = ["\ud83c[\udf00-\udfff]", "\ud83d[\udc00-\ude4f]", "\ud83d[\ude80-\udeff]"];
  return new RegExp(arr.join("|"), "g").test(value);
};
/*
 * 隐藏用户手机号中间四位
 */
export function hidePhone(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}