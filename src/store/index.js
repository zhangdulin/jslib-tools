/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-23 20:21:44
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 17:09:57
 * @Description: 
 */
import { decode_url_param } from '../transfer/jsonString'

//------------------------------- cookie.js -------------------------------
//解析cookie值
function parseCookieValue(s) {
  if (s.indexOf('"') === 0) s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');

  return decode_url_param(s.replace(/\+/g, ' '));
}

//读取cookie值或返回整个对象
/**
 * @description: 
 * @param {*} key
 * @return {*}
 */
function getCookie(key) {
  var result = key ? undefined : {},
    cookies = document.cookie ? document.cookie.split('; ') : [];

  for (var i = 0, len = cookies.length; i < len; i++) {
    var parts = cookies[i].split('='),
      name = decode_url_param(parts[0]),
      cookie = parts.slice(1).join('=');

    if (key && key === name) {
      result = parseCookieValue(cookie);
      break;
    }

    if (!key && (cookie = parseCookieValue(cookie)) !== undefined) {
      result[name] = cookie;
    }
  }

  return result;
}

//设置cookie
function setCookie(key, value, ops) {
  ops = ops || {};

  var expires = ops.expires;
  if (typeof expires === "number") expires = new Date().add("d", expires);

  document.cookie = [
    encode_url_param(key), '=', encode_url_param(value),
    expires ? '; expires=' + expires.toUTCString() : '',
    ops.path ? '; path=' + ops.path : '',
    ops.domain ? '; domain=' + ops.domain : '',
    ops.secure ? '; secure' : ''
  ].join('');
}

//移除cookie
function removeCookie(key) {
  if (getCookie(key) != undefined) setCookie(key, '', { expires: -1 });
}

//清空cookie
function clearCookie() {
  var cookies = document.cookie ? document.cookie.split('; ') : [];
  for (var i = 0, len = cookies.length; i < len; i++) {
    var parts = cookies[i].split('='),
      key = decode_url_param(parts[0]);

    removeCookie(key);
  }
}

/**
 * @description: 获取设置清除cookie 
 * @param {*}
 * @return {object}
 */
export var cookie = {
  get: getCookie,
  set: setCookie,
  remove: removeCookie,
  clear: clearCookie
};

//------------------------------- Storage.js -------------------------------
//type:localStorage | sessionStorage
//useCookie:在其它特性不支持的情况下是否启用cookie模拟
/**
 * @description: 获取设置清除Storage 
 * @param {*} type type:localStorage | sessionStorage
 * @param {*} useCookie 是否用cookie 模拟store
 * @return {object}
 */
export function storage(type, useCookie) {
  var isLocal = type != "sessionStorage";

  if (!isLocal && !location.host) return;

  var STORE_NAME = type,

    storage = window[STORE_NAME],
    adapter = storage && "getItem" in storage ? "storage" : null;

  if (!adapter) {
    var userData = document.documentElement, TEST_KEY = "_TEST_";

    try {
      //ie userdata
      userData.addBehavior('#default#userdata');
      //7天后过期
      if (isLocal) userData.expires = new Date().add("d", 7).toUTCString();

      STORE_NAME = location.hostname || "local";
      userData.save(STORE_NAME);

      storage = {
        getItem: function (key) {
          userData.load(STORE_NAME);
          return userData.getAttribute(key);
        },
        setItem: function (key, value) {
          userData.setAttribute(key, value);
          userData.save(STORE_NAME);
        },
        removeItem: function (key) {
          userData.removeAttribute(key);
          userData.save(STORE_NAME);
        },
        clear: function () {
          userData.load(STORE_NAME);

          var now = new Date().add("d", -1);
          userData.expires = now.toUTCString();
          userData.save(STORE_NAME);
        }
      };

      if (storage.getItem(TEST_KEY) === undefined) {
        storage.setItem(TEST_KEY, 1);
        storage.removeItem(TEST_KEY);
      }

      adapter = "userdata";
    } catch (e) { }

    //cookie 模拟
    if (!adapter && useCookie) {

      storage = {
        getItem: getCookie,
        //setItem: setCookie,
        setItem: isLocal ? function (key, value) {
          setCookie(key, value, { expires: 7 });
        } : setCookie,
        removeItem: removeCookie,
        clear: clearCookie
      };

      adapter = "cookie";
    }
  }

  var support = !!adapter;

  var store = {
    //是否支持本地缓存
    support: support,

    //适配器:storage|userdata|cookie|null
    adapter: adapter,

    //获取本地缓存
    get: function (key, isJSON) {
      if (support) {
        try {
          var value = storage.getItem(key);
          return isJSON ? (value ? JSON.parse(value) : null) : value;
        } catch (e) { }
      }

      return undefined;
    },
    //设置本地缓存
    set: function (key, value) {
      if (support) {
        try {
          storage.setItem(key, typeof value == "string" ? value : JSON.stringify(value));
          return true;
        } catch (e) { }
      }

      return false;
    },
    //删除本地缓存
    remove: function (key) {
      if (support) {
        try {
          storage.removeItem(key);
          return true;
        } catch (e) { }
      }

      return false;
    },
    //清空本地缓存
    clear: function () {
      if (support) {
        try {
          storage.clear();
          return true;
        } catch (e) { }
      }

      return false;
    }
  };

  return store;
}


export default {
  cookie,
  storage
}