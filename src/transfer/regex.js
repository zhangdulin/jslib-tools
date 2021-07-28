/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-13 13:25:06
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-28 13:51:11
 * @Description: 
 */

// trim 方法是去掉字符串的开头和结尾的空白符。有两种思路去做。 第一种，匹配到开头和结尾的空白符，然后替换成空字符。如：
export function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
// 第二种，匹配整个字符串，然后用引用来提取出相应的数据：
// function trim(str) {
//   return str.replace(/^\s*(.*?)\s*$/g, "$1");
// }
// 这里使用了惰性匹配 *?，不然也会匹配最后一个空格之前的所有空格的。
// 当然，前者效率高。

/**
 * @description: 将每个单词的首字母转换为大写
 * @param {*string} str
 * @return {*string}
 */
export function titleize(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (c) {
    return c.toUpperCase();
  });
}
// console.log(titleize('my name is epeli'));
// => "My Name Is Epeli"
// 思路是找到每个单词的首字母，当然这里不使用非捕获匹配也是可以的。

/**
 * @description: 驼峰化 
 * @param {*string} str
 * @return {*string}
 */
export function camelize(str) {
  return str.replace(/[-_\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : '';
  });
}
// console.log(camelize('-moz-transform'));
// => "MozTransform"
// 其中分组 (.) 表示首字母。单词的界定是，前面的字符可以是多个连字符、下划线以及空白符。正则后面
// 的 ? 的目的，是为了应对 str 尾部的字符可能不是单词字符，比如 str 是 '-moz-transform '。

/**
 * @description: 中划线化
 * @param {*string} str
 * @return {*string}
 */
export function dasherize(str) {
  return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
}
// console.log(dasherize('MozTransform'));
// => "-moz-transform"
// 驼峰化的逆过程。

// HTML 转义和反转义
/**
 * @description: 将HTML特殊字符转换成等值的实体 
 * @param {*string}
 * @return {*string}
 */
 export function escapeHTML(str) {
  var escapeChars = {
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    '&': 'amp',
    '\'': '#39'
  };
  return str.replace(new RegExp('[' + Object.keys(escapeChars).join('') + ']', 'g'),
    function (match) {
      return '&' + escapeChars[match] + ';';
    });
}
// console.log(escapeHTML('<div>Blah blah blah</div>'));
// => "&lt;div&gt;Blah blah blah&lt;/div&gt";
// 其中使用了用构造函数生成的正则，然后替换相应的格式就行了。
// 倒是它的逆过程，使用了括号，以便提供引用，也很简单，如下：

/**
 * @description: 实体字符转换为等值的HTML 
 * @param {*string}
 * @return {*string}
 */
export function unescapeHTML(str) {
  var htmlEntities = {
    nbsp: ' ',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: '\''
  };
  return str.replace(/\&([^;]+);/g, function (match, key) {
    if (key in htmlEntities) {
      return htmlEntities[key];
    }
    return match;
  });
}
// console.log(unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;'));
// => "<div>Blah blah blah</div>"