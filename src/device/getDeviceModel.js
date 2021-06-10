/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:50:14
 * @Description: 
 */
/**
 * 获取手机操作系统类型
 * @return {string} ios android
 */
 export function getDeviceModel() {
  var ua = navigator.userAgent;
  if (/Android|BlackBerry|IEMobile/i.test(ua)) {
    return 'android';
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    return 'ios';
  }
  return 'Unknown';
};
