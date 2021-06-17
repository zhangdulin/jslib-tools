/*!
 * jtools v0.0.1
 * jlb web team
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var regeneratorRuntime = _interopDefault(require('regenerator-runtime'));

/**
 * 获取图片的base64 url
 * @param {string} url 图片url
 * @returns {Promise} 图片base64信息
 */
function getImgBase64(url) {
  /* eslint-disable */
  var Img = new Image(),
      dataURL = "";
  Img.setAttribute("crossOrigin", "anonymous");
  Img.src = url;
  return new Promise(function (resolve, reject) {
    Img.onload = function () {
      var canvas = document.createElement("canvas"),
          width = Img.width,
          height = Img.height;
      var ctx = canvas.getContext("2d");
      var scale = 5;
      ctx.scale(scale, scale);
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.drawImage(Img, 0, 0, width * scale, height * scale);
      dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
  });
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:31
 * @Description: 
 */

/**
 * 日期格式化
 * 时间规则：
 * 今天显示：xx:xx
 * 昨天显示：昨天 xx:xx
 * 一周内显示：星期x xx:xx
 * 一年内显示：xx月xx日 xx:xx
 * 更早日期显示：xx年xx月xx日 xx:xx
 * @param {*} value 时间戳，单位s
 * @return {*} 格式化后的日期
 */
function dateFormat1(value) {
  if (!value) return "";
  var time = value * 1000;
  var now = new Date().getTime();
  var year = new Date(time).getFullYear();
  var month = new Date(time).getMonth() + 1;
  var date = new Date(time).getDate();
  var hour = new Date(time).getHours();
  var min = new Date(time).getMinutes();
  var weekType = ["日", "一", "二", "三", "四", "五", "六"];
  var week = "星期" + weekType[new Date(time).getDay()];

  if (min < 10) {
    min = "0" + min;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (new Date().getDate() - new Date(time).getDate() === 0) {
    return hour + ":" + min;
  } else if (new Date().getDate() - new Date(time).getDate() === 1) {
    return "昨天 " + hour + ":" + min;
  } else if (new Date().getTime() < new Date(time).getTime() && new Date().getDate() - new Date(time).getDate() < 7 && new Date().getDay() - new Date(time).getDay() > 0) {
    return week + hour + ":" + min;
  } else if (year < new Date(now).getFullYear()) {
    return year + "年" + month + "月" + date + "日   " + hour + ":" + min;
  } else {
    return month + "月" + date + "日   " + hour + ":" + min;
  }
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:38
 * @Description: 
 */

/**
 * 日期格式化
 * 时间规则：
 * 小于一分钟显示：刚刚
 * 1分钟-60分钟内显示：xx分钟前
 * 大于60分钟显示：xx小时前
 * 昨天显示：昨天 xx:xx
 * 更早日期显示：xx-xx-xx xx:xx
 * @param {*} dateTimeStamp 时间戳，单位s
 * @return {*} 格式化后的日期
 */
function dateFormat2(dateTimeStamp) {
  if (!dateTimeStamp) return "";
  dateTimeStamp = dateTimeStamp * 1000;
  var minute = 1000 * 60; // 把分，时，天，周，半个月，一个月用毫秒表示

  var hour = minute * 60;
  var now = new Date().getTime(); // 获取当前时间毫秒

  var result = "";
  var diffValue = now - dateTimeStamp; // 时间差

  if (diffValue < 0) {
    return;
  }

  var minC = diffValue / minute; // 计算时间差的分，时，天，周，月

  var hourC = diffValue / hour;
  var datetime = new Date();
  datetime.setTime(dateTimeStamp);
  var Nyear = datetime.getFullYear();
  var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
  var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
  var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
  var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();

  if (hourC >= 1 && hourC < 24) {
    result = " " + parseInt(hourC) + "小时前";
  } else if (hourC >= 24 && hourC < 48 && new Date().getDate() - Ndate === 1) {
    result = "昨天 " + Nhour + ":" + Nminute;
  } else if (minC >= 1 && minC < 60) {
    result = " " + parseInt(minC) + "分钟前";
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "刚刚";
  } else {
    result = Nyear + "-" + Nmonth + "-" + Ndate + " " + Nhour + ":" + Nminute;
  }

  return result;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:45
 * @Description:
 */

/**
 * 获取饿了么框架时间选择器时间戳
 * @param {*} time 时间
 * @param {*} type 类型  默认值 0  0 开始时间  1  结束时间
 * @return {number|string|null} 时间戳
 */
function elDateFormat(time) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!time) {
    return null;
  }

  var timeStamp = null;

  if (Array.isArray(time) && time.length > 0) {
    if (type == 1) {
      timeStamp = Math.floor(new Date(new Date(time[type]).setHours(23, 59, 59, 0)) / 1000);
    } else {
      timeStamp = Math.floor(new Date(new Date(time[type]).setHours(0, 0, 0, 0)) / 1000);
    }
  } else if (Array.isArray(time) && time.length == 0) {
    return null;
  } else if (!Array.isArray(time)) {
    timeStamp = Math.floor(new Date(time).getTime() / 1000);
  } else {
    return null;
  }

  return timeStamp;
}

/**
 * 获取浏览器类型和版本
 * @return {string}
 * @example
 * getBrowserModel() => "Chrome:70.0.3538.102"
 */
function getBrowserModel() {
  var sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s = null;
  /* eslint-disable */

  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : (s = ua.match(/micromessenger\/([\d\.]+)/)) ? sys.micromessenger = s[1] : (s = ua.match(/QQ\/([\d\.]+)/gi)) ? sys.qq = s[1] : 0; // 根据关系进行判断

  if (sys.ie) return "IE:" + sys.ie;
  if (sys.edge) return "Edge:" + sys.edge;
  if (sys.firefox) return "Firefox:" + sys.firefox;
  if (sys.chrome) return "Chrome:" + sys.chrome;
  if (sys.opera) return "Opera:" + sys.opera;
  if (sys.safari) return "Safari:" + sys.safari;
  if (sys.micromessenger) return "Micromessenger:" + sys.micromessenger;
  if (sys.qq) return "QQ:" + sys.qq;
  return "Unknown";
}

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
var getDeviceModel = {
  device: function () {
    var u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1,
      // IE内核
      presto: u.indexOf('Presto') > -1,
      // opera内核
      webKit: u.indexOf('AppleWebKit') > -1,
      // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
      // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
      // android终端
      iPhone: u.indexOf('iPhone') > -1,
      // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1 || u.indexOf('Macintosh') > -1,
      // 是否iPad
      webApp: u.indexOf('Safari') === -1,
      // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1,
      // 是否微信 （2015-01-22新增）
      qq: u.indexOf(' QQ') > -1 // 是否QQ

    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:59:15
 * @Description:
 */

/**
 * 删除对象里面value值为null的键值对
 * @param {*} data 接口返回的blob数据
 * @param {*} name excel名称
 * @param {*} callBack 导出成功/失败回调  回调返回{type:fail/success}  fail情况下 返回{ type: "fail", code, msg }
 */
function exportXls(data) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "jtools";
  var callBack = arguments.length > 2 ? arguments[2] : undefined;

  if (!data || data.size == 0) {
    callBack && callBack({
      type: "fail",
      msg: "数据为空"
    });
    return false;
  }

  var reader = new FileReader();
  reader.readAsText(data, "utf-8");

  reader.onload = function (e) {
    try {
      var _JSON$parse = JSON.parse(reader.result),
          code = _JSON$parse.code,
          msg = _JSON$parse.msg;

      if (code && code != 200) {
        callBack && callBack({
          type: "fail",
          code: code,
          msg: msg
        });
        return false;
      } else {
        _downFile(data, name);
      }

      callBack && callBack({
        type: "success"
      });
    } catch (error) {
      _downFile(data, name);

      callBack && callBack({
        type: "success"
      });
    }
  };
}

function _downFile(data, fileName) {
  var blob = new Blob([data], {
    type: "application/vnd.ms-excel,charset=UTF-8"
  });

  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, fileName + ".xlsx");
  } else {
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName + ".xlsx";
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:19:43
 * @Description: 
 */

/**
 * 图像处理获取缩略图
 * @param   {Object}  opts - 参数对象
 * @param   {string}  opts.src - 处理源路径
 * @param   {string}  opts.type - 处理类型 2:图片 4:视频
 * @param   {string}  opts.payload - 负载参数: https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.6.1148.4d7d176cZS0ozx
 * @param   {boolean} opts.ifSelf - 返回源路径
 * @param   {string}  opts.ossdomain - 图片对应的oss域名
 * @returns {string} 处理后的图片路径
 */
function getThumbnails() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    src: "",
    type: "",
    payload: {
      width: 750
    },
    ifSelf: true,
    ossdomain: "https://images2.bestjlb.com/"
  };
  var src = opts.src,
      type = opts.type,
      payload = opts.payload,
      ifSelf = opts.ifSelf,
      ossdomain = opts.ossdomain;
  if (!src) return "";
  if (src.indexOf("?") > -1) return src;

  if (src.indexOf(ossdomain) > -1) {
    return src.indexOf("v2jlboss") > -1 ? handleoss(true) : handleoss();
  } else {
    if (src.indexOf("jlboss") > -1) {
      return ossdomain + handleoss();
    } else if (src.indexOf("v2jlboss") > -1) {
      return ossdomain + handleoss(true);
    }
  }

  return src;

  function handleoss(oss) {
    if (type === 2 && !ifSelf) {
      return "".concat(src, "?x-oss-process=image/resize,w_").concat(payload.width, "/auto-orient,1");
    } else if (type === 4 && !ifSelf) {
      if (oss) {
        return "".concat(src, ".jpeg?x-oss-process=image/format,jpg/resize,w_").concat(payload.width, "/auto-orient,1");
      } else {
        return "".concat(src, "?x-oss-process=video/snapshot,t_1000,w_").concat(payload.width);
      }
    } else {
      return src;
    }
  }
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:14:20
 * @Description: 
 */

/**
 * 获取默认头像
 * @param {*} userId
 */
function getDefaultAvatar() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    userId: 0,
    imageDomain: ""
  },
      userId = _ref.userId,
      imageDomain = _ref.imageDomain;

  if (!imageDomain) return "";
  return imageDomain + "/photo/user_header" + (userId || 0) % 10 + ".png";
}

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
function isEmoji(value) {
  var arr = ["\uD83C[\uDF00-\uDFFF]", "\uD83D[\uDC00-\uDE4F]", "\uD83D[\uDE80-\uDEFF]"];
  return new RegExp(arr.join("|"), "g").test(value);
}

/**
 * 校验十八位身份证号码
 * @param {*} idcard 身份证号码
 * @return {boolean} 验证结果true/false
 */
function isIDCard(idcard) {
  var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(idcard);
}

/**
 * @description 检查是否为特殊字符
 * @author pengyong
 * @param {string} value 正则校验的变量
 * @returns {boolean} 正则校验结果 true: 是特殊字符 false: 不是特殊字符
 */
function isSpecialChar(value) {
  var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]\s]/im;
  var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]\s]/im;
  return regEn.test(value) || regCn.test(value);
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-15 14:01:08
 * @Description: 
 */

/**
 * 检查是否为正确手机号 1开头11位数字
 * @param {*} value 正则校验变量
 * @return {boolean} 正则校验结果
 */
function isMobile(value) {
  return /^[1][0-9]{10}$/.test(value);
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:54:42
 * @Description: 
 */

/**
 * utf16字符串转实体字符
 * @param {string} str 待编译的字符串
 */
function utf16toEntities(str) {
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("需要编译的数据类型需要是字符串类型");
    return str;
  }

  var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则

  str = str.replace(patt, function (_char) {
    var H, L, code;

    if (_char.length === 2) {
      H = _char.charCodeAt(0); // 取出高位

      L = _char.charCodeAt(1); // 取出低位

      code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00; // 转换算法

      return "&#" + code + ";";
    } else {
      return _char;
    }
  });
  return str;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:05:13
 * @Description: 
 */
/**
 * 实体字符转utf16字符串
 * @param {*} str 待解析的字符串
 */

function entitiestoUtf16(str) {
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("需要解析的数据类型需要是字符串类型");
    return str;
  } // 检测出形如&#12345;形式的字符串


  var strObj = utf16toEntities(str);
  var patt = /&#\d+;/g;
  var H, L, code;
  var arr = strObj.match(patt) || [];

  for (var i = 0; i < arr.length; i++) {
    code = arr[i];
    code = code.replace("&#", "").replace(";", ""); // 高位

    H = Math.floor((code - 0x10000) / 0x400) + 0xd800; // 低位

    L = (code - 0x10000) % 0x400 + 0xdc00;
    code = "&#" + code + ";";
    var s = String.fromCharCode(H, L);
    strObj = strObj.replace(code, s);
  }

  return strObj;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:02:21
 * @Description: 
 */
/**
 * @description 处理emoji，用于把用utf16编码的字符转换成实体字符
 * @param {string} str 需要编译/解析的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/解析后的字符串
 * @example
 * handleEmoji("😃", "encode") => "&#128515;"
 * handleEmoji("&#128522;", "decode") => "😊"
 */

function handleEmoji() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "encode";
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("handleEmoji数据类型需要是字符串类型");
    return str;
  }

  if (type === "encode") {
    return utf16toEntities(str);
  } else if (type === "decode") {
    return entitiestoUtf16(str);
  } else {
    return str;
  }
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:02:48
 * @Description: 
 */
/**
 * @description 处理文本，客户端无法识别h5的br标签和空格符，因此需要处理br标签为\n和空格符为 ''
 * @param {string} str 需要编译/转义的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/转义后的字符串
 * @example
 * handleText("<br>&nbsp;&lt;&gt;", "encode") => "\n <>"
 * handleText("\n <>", "decode") => "<br>&nbsp;&lt;&gt;"
 */

function handleText() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "encode";
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("handleText数据类型需要是字符串类型");
    return str;
  }
  /* eslint-disable no-unused-vars */


  var newStr = null;

  if (type === "encode") {
    newStr = entitiestoUtf16(str).replace(/<br>/gi, "\n").replace(/&nbsp;/g, " ").replace("&lt;", "<").replace("&gt;", ">");
  } else if (type === "decode") {
    newStr = utf16toEntities(str).replace("<", "&lt;").replace(">", "&gt;").replace(/\n|\r\n/g, "<br>").replace(/[ ]/g, "&nbsp;");
  } else {
    return str;
  }

  return newStr;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:00:33
 * @Description: 
 */

/**
 * 删除对象里面value值为null的键值对
 * @param {*} obj 需要处理的参数
 * @return {object} 返回结果
 */
function handleParam() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (JSON.stringify(obj) === "{}") return {};
  var res = {};
  var arr = Object.keys(obj);
  arr.forEach(function (item) {
    if (obj[item] !== null) {
      res[item] = obj[item];
    }
  });
  return res;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 15:22:05
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:21
 * @Description:
 */

/**
 * 判断字符串是否是十六进制的颜色值
 * @param {*} string string
 * @return {*} boolean
 */
function isColor(value) {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
} // module.exports = isColor;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof = unwrapExports(_typeof_1);

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 14:28:20
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-11 10:39:11
 * @Description:
 */

/**
 * @description: 設置url參數
 * @param {*} url url
 * @param {*} obj 參數對象
 * @return {*} url + 參數
 */
function setParam(url, obj) {
  if (_typeof(obj) !== 'object') {
    return url;
  }

  for (var key in obj) {
    var value = obj[key];

    if (value === false) {
      value = String(value);
    }

    if (value) {
      url = url.replace(new RegExp('(^|\\?|&)' + key + '=[^&]*(?=&|$|#)', 'g'), '');
      value = value.splice ? value : [value];

      for (var i = value.length - 1; i >= 0; i--) {
        value[i] = encodeURIComponent(value[i]);
      }

      var p = key + '=' + value.join('&' + key + '=');
      url = url + (/\?/.test(url) ? '&' : '?') + p;
    }
  }

  return url;
}
/**
 * @description: 獲取url 參數
 * @param {*} key key 指定參數返回字符串  默認返回對象
 * @param {*} type 获取参数的类型 可传值search hash  默认search
 * @return {*} 字符串或对象
 */

function getParam(type, key) {
  var url = location.search || ''; // 获取url中'?'符后的字串

  var params = {};

  if (type && type === 'hash') {
    url = location.hash || '';
  }

  if (url.indexOf('?') != -1) {
    var str = url.substr(1) || '';
    var strs = str.split('&');

    if (strs && strs.length) {
      for (var i = 0; i < strs.length; i++) {
        var strsItem = strs[i].split('=');

        if (strsItem.length == 2) {
          params[strsItem[0]] = decodeURIComponent(strsItem[1]);
        }
      }
    }
  }

  if (key && Object.keys(params).length) {
    return params[key] || '';
  } else {
    return params;
  }
}

var asyncToGenerator = createCommonjsModule(function (module) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _asyncToGenerator = unwrapExports(asyncToGenerator);

var D__code_demo_npm_commonUtils_node_modules__babel_runtime_regenerator = regeneratorRuntime;

/*
* @Author: zhangyu
* @Email: zhangdulin@outlook.com
* @Date: 2021-06-11 11:00:48
* @LastEditors: zhangyu
* @LastEditTime: 2021-06-11 14:05:50
* @Description: 
*/
// 注册方法获取WebViewJavascriptBridge对象

function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  }

  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  } // 兼容安卓


  document.addEventListener('WebViewJavascriptBridgeReady', function () {
    return callback(window.WebViewJavascriptBridge);
  }, false); // 兼容ios

  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
} //  获取WebViewJavascriptBridge对象


function getBirdge() {
  return new Promise(function (resolve) {
    if (window.WebViewJavascriptBridge) {
      return resolve(window.WebViewJavascriptBridge);
    }

    setupWebViewJavascriptBridge(function (bridge) {
      // 初始化
      bridge.init(function (message, responseCallback) {
        var data = {
          'Javascript Responds': 'Wee!'
        };
        responseCallback(data);
      });
      resolve(bridge);
    });
  });
} // 重写之后的birdge

/**
* @description: jsbridge callHandler
* @param {*} callHandlerData 
* @param {*} name n请求的方法
* @param {*} data 请求时传的参数
* @return {*} function
*/


var jsBridge = {
  ctx: null,
  // WebViewJavascriptBridge
  callHandler: function callHandler() {
    var _this = this;

    var callHandlerData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      name: '',
      data: {}
    };
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/D__code_demo_npm_commonUtils_node_modules__babel_runtime_regenerator.mark(function _callee(resolve) {
        return D__code_demo_npm_commonUtils_node_modules__babel_runtime_regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.ctx) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return getBirdge();

              case 3:
                _this.ctx = _context.sent;

              case 4:
                _this.ctx.callHandler(callHandlerData.name, callHandlerData.data, function (res) {
                  return resolve(res);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  registerHandler: function registerHandler(jsHandlerName) {
    // 重写事件注册方法
    this.ctx.registerHandler(jsHandlerName, function (data, callback) {
      if (callback) {
        callback("\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u544A\u8BC9ObjC\uFF1A\u6211\u5DF2\u6536\u5230\u6570\u636E".concat(JSON.stringify(data)));
      }
    });
  }
};

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-11 14:27:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-15 10:48:26
 * @Description: 
 */

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 17:44:08
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 17:44:08
 * @Description: 
 */

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);

    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
};
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */

var throttle = function throttle(func, wait, type) {

  return function () {
    var context = this;
    var args = arguments;

    if (type === 1) {
      var now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
};

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 17:43:38
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:08:25
 * @Description: 
 */
var has = Object.prototype.hasOwnProperty;
/**
 * 检测是否为对象
 * @param {object} obj 要检测的数据
 */

function isObject(obj) {
  //typeof null => object
  //toString.call(null) => [object Object]
  return obj && toString.call(obj) === "[object Object]";
}
/**
 * 检测是否为数组
 * @param {object} obj 要检测的数据
 */


function isArray(obj) {
  return toString.call(obj) === "[object Array]";
}
/* 
* 数据克隆(深拷贝)
* @param {object} data 要克隆的对象
*/


function deepCopy(data) {
  if (!data) return data;

  switch (_typeof(data)) {
    case "string":
    case "number":
    case "boolean":
      return data;
  }

  var result;

  if (isArray(data)) {
    result = [];

    for (var i = 0, len = data.length; i < len; i++) {
      result[i] = deepCopy(data[i]);
    }
  } else if (isObject(data)) {
    result = {};

    for (var key in data) {
      if (has.call(data, key)) result[key] = deepCopy(data[key]);
    }
  }

  return result;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 18:15:36
 * @Description: 
 */
var index = {
  isColor: isColor,
  getParam: getParam,
  setParam: setParam,
  getImgBase64: getImgBase64,
  dateFormat1: dateFormat1,
  dateFormat2: dateFormat2,
  elDateFormat: elDateFormat,
  getBrowserModel: getBrowserModel,
  getDeviceModel: getDeviceModel,
  exportXls: exportXls,
  getThumbnails: getThumbnails,
  getDefaultAvatar: getDefaultAvatar,
  isEmoji: isEmoji,
  isIDCard: isIDCard,
  isSpecialChar: isSpecialChar,
  isMobile: isMobile,
  handleEmoji: handleEmoji,
  handleText: handleText,
  handleParam: handleParam,
  jsBridge: jsBridge,
  // setVideoPlay,
  debounce: debounce,
  throttle: throttle,
  deepCopy: deepCopy
};

module.exports = index;
