/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 14:38:04
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:52:17
 * @Description:
 */
/**
 * @description: 时间格式化
 * @param {*} time 時間戳
 * @param {*} cFormat 轉換後的格式
 * @return {*} 格式化后的時間
 */
 export function parseTime(time, cFormat) {
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds()
  };
  return format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
    let value = formatObj[key];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
}
