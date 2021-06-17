/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-11 10:44:45
 * @Description: 
 */

/**
 * @description: 判断操作系统类型 安卓 苹果 浏览器等
 * @return {*} object device: 操作系统； language：当前语音
 */
export const getDeviceModel = {
  device: (function() {
    var u = navigator.userAgent
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1 || u.indexOf('Macintosh') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
      qq: u.indexOf(' QQ') > -1 // 是否QQ
    }
  }()),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
