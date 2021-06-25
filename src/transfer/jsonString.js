/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-23 20:22:57
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 17:14:39
 * @Description:
 */

import {
  getType
} from '../judgement/index'

/**
 * 解码url参数值 eg:%E6%B5%8B%E8%AF%95 => 测试
 * @param {string} param 要解码的字符串 eg:%E6%B5%8B%E8%AF%95
 */
export function decode_url_param(param) {
  try {
    return decodeURIComponent(param);
  } catch (e) {
    return param;
  }
}

//----------------------- JSON.js -----------------------

var has = Object.prototype.hasOwnProperty,

  JSON_SPECIAL = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\'
  },
  JSON_NULL = "null";

//字符转义
function json_replace(c) {
  //return JSON_SPECIAL[c]||'\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
  return JSON_SPECIAL[c] || c;
}

//json转化
function json_encode(obj) {
  switch (getType(obj)) {
    case "string":
      return '"' + obj.replace(/[\x00-\x1f\\"]/g, json_replace) + '"';
    case "list":
    case "array":
      var tmp = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        if (typeof obj[i] !== "function") tmp.push(obj[i] != undefined ? json_encode(obj[i]) : JSON_NULL);
      }
      return "[" + tmp + "]";
    case "object":
    case "arguments":
      var tmp = [];
      for (var k in obj) {
        if (has.call(obj, k) && typeof obj[k] !== "function") tmp.push("\"" + k + "\":" + json_encode(obj[k]));
      }
      return "{" + tmp.toString() + "}";
    case "boolean":
      return obj + "";
    case "number":
      return isFinite(obj) ? obj + "" : JSON_NULL;
    case "date":
      return isFinite(obj.valueOf()) ? "\"" + obj.toUTC().format("yyyy-MM-ddTHH:mm:ss.SZ") + "\"" : JSON_NULL;
    case "function":
      return;
    default:
      return typeof obj == "object" ? "{}" : JSON_NULL;
  }
}

//json解析
//secure:是否进行安全检测
function json_decode(text, secure) {
  //安全检测
  if (secure !== false && !/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) throw new Error("JSON SyntaxError");
  try {
    return (new Function("return " + text))();
  } catch (e) { }
}

if (!window.JSON) {
  window.JSON = {
    stringify: json_encode,
    parse: json_decode
  };
}

JSON.encode = json_encode;
JSON.decode = json_decode;


export default {
  decode_url_param,
  json_replace,
  json_encode,
  json_decode
}