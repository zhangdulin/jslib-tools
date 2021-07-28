/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-28 13:59:27
 * @Description: 
 */

// canvas
import { getImgBase64, getHttpBase64 } from "./canvas/getBase64";

// dateFormat
import { dateFormat1 } from "./dateFormat/dateFormat1";
import { dateFormat2 } from "./dateFormat/dateFormat2";
import { elDateFormat } from "./dateFormat/elDateFormat";

// device
import { getBrowserModel } from "./device/getBrowserModel";
import { getDeviceModel } from "./device/getDeviceModel";
// export
import { exportXls } from "./export/exportXls";

// oss
import { getThumbnails } from "./oss/getThumbnails";
import { getDefaultAvatar } from "./oss/getDefaultAvatar";


// reg
import { isEmoji } from "./reg/isEmoji";
import { isIDCard } from "./reg/isIDCard";
import { isSpecialChar } from "./reg/isSpecialChar";
// 正则校验 手机号座机号等
import { Regs } from "./reg/index";

// transfer
import { handleEmoji } from "./transfer/handleEmoji";
import { handleText } from "./transfer/handleText";
import { handleParam } from "./transfer/handleParam";
import * as byteTools from "./transfer/bytes";
import jsonTools from "./transfer/jsonString";
import objTransfer from "./transfer/index";
import strTransfer from "./transfer/string";


import { isColor } from './color/isColor'
import { getParam, setParam } from './url/index'

// plugins
// jsBridge
import jsBridge from './plugins//jsBridge/index'
// 高德地图
import AMaploader from './plugins/AMap/index'
// websocket
import createWebsocket from './plugins/websocket/index'

// UUID appendJs
import { getUUID, appendJs } from './plugins/index'

// dom
// video 设置自动播放
import { setVideoPlay } from './dom/videoPlay'
// 复制 获取黏贴内容 光标位置等
import { clipboardObj, cursortPosition } from './dom/addEventListener'

// performance
// 节流防抖 延时 睡眠
import { debounce, throttle, sleepSync, sleepAction } from './performance/index'

// obj
// 深复制 两个对象是否相等 对象是否有key
import { deepCopy, objTools } from './obj/index'
// 数组相关操作
import arrayTools from './obj/array/index'
// 判断对象数字类型等方法
import judgeTools from './judgement/index'

// session local cookie 
import * as store from './store/index'
// window
import { getGlobal, setGlobal, globalLib, removeGlobalItem } from './obj/window'

export default {
    getParam,
    setParam,

    getImgBase64,
    getHttpBase64,

    dateFormat1,
    dateFormat2,
    elDateFormat,

    getBrowserModel,
    getDeviceModel,

    exportXls,
    getThumbnails,
    getDefaultAvatar,

    Regs,
    isColor,
    isEmoji,
    isIDCard,
    isSpecialChar,
    handleEmoji,
    handleText,
    handleParam,

    byteTools,
    jsonTools,
    objTransfer,
    strTransfer,

    jsBridge,
    AMaploader,
    createWebsocket,
    getUUID,
    appendJs,
    store,

    debounce,
    throttle,
    sleepSync,
    sleepAction,
    deepCopy,
    objTools,
    arrayTools,
    judgeTools,

    setVideoPlay,
    cursortPosition,
    clipboardObj,

    getGlobal,
    setGlobal,
    globalLib,
    removeGlobalItem
}
