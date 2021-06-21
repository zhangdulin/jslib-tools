/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-18 10:28:23
 * @Description: 
 */

// canvas
import { getImgBase64 } from "./canvas/getImgBase64";

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
import { isMobile } from "./reg/isMobile";

// transfer
import { handleEmoji } from "./transfer/handleEmoji";
import { handleText } from "./transfer/handleText";
import { handleParam } from "./transfer/handleParam";
import { b2size } from "./transfer/bytes";

import { isColor } from './color/isColor'
import { getParam, setParam} from './url/index'

// plugins
// jsBridge
import jsBridge from './plugins//jsBridge/index'
// 高德地图
import AMaploader from './plugins/AMap/index'

// dom
// video 设置自动播放
import { setVideoPlay } from './dom/videoPlay'

// performance
// 节流防抖
import { debounce,throttle } from './performance/index'

// obj
// 深复制
import { deepCopy } from './obj/index'

export default {
    isColor,
    getParam,
    setParam,
    getImgBase64,
    dateFormat1,
    dateFormat2,
    elDateFormat,
    getBrowserModel,
    getDeviceModel,
    exportXls,
    getThumbnails,
    getDefaultAvatar,
    isEmoji,
    isIDCard,
    isSpecialChar,
    isMobile,
    handleEmoji,
    handleText,
    handleParam,
    b2size,
    jsBridge,
    AMaploader,
    setVideoPlay,
    debounce,
    throttle,
    deepCopy
}
