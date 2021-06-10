/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 14:28:20
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 09:10:35
 * @Description:
 */

/**
 * @description: 設置url參數
 * @param {*} url url
 * @param {*} obj 參數對象
 * @return {*} url + 參數
 */
function setParam(url, obj) {
    if (typeof obj !== 'object') {
      return url;
    }

    for (const key in obj) {
      let value = obj[key];
      if (value === false) {
        value = String(value);
      }
      if (value) {
        url = url.replace(
          new RegExp('(^|\\?|&)' + key + '=[^&]*(?=&|$|#)', 'g'),
          ''
        );
        value = value.splice ? value : [value];
        for (let i = value.length - 1; i >= 0; i--) {
          value[i] = encodeURIComponent(value[i]);
        }
        const p = key + '=' + value.join('&' + key + '=');
        url = url + (/\?/.test(url) ? '&' : '?') + p;
      }
    }
    return url;
  }

  /**
   * @description: 獲取url 參數
   * @param {*} key key 指定參數返回字符串  默認返回對象
   * @return {*} 字符串或
   */
  function getParam(key) {
    const url = location.search; // 获取url中"?"符后的字串
    const theRequest = {};
    if (url.indexOf("?") != -1) {
       const str = url.substr(1);
       const strs = str.split("&");
       for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
       }
    }
    return theRequest;
 }
  module.exports = {
    setParam,
    getParam
  };

