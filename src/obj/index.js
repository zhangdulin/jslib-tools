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
export function deepCopy(data) {
    if (!data) return data;

    switch (typeof data) {
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