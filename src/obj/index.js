/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 17:43:38
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:16:15
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


/**
 * @description: 对象方法工具 hasKey:判断一个对象是否存在key; objEqual: 两个对象是否相等这两个对象的值只能是数字或字符串
 * @param {*}
 * @returns {number|boolean}
 */
export const objTools = {
    /**
     * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
     * 如果没有传入key这个参数，则判断obj对象是否有键值对
     */
    hasKey: (obj, key) => {
        if (key) return key in obj;
        else {
            const keysArr = Object.keys(obj);
            return keysArr.length;
        }
    },
    // 两个对象是否相等这两个对象的值只能是数字或字符串
    objEqual: (obj1, obj2) => {
        const keysArr1 = Object.keys(obj1);
        const keysArr2 = Object.keys(obj2);
        if (keysArr1.length !== keysArr2.length) return false;
        else if (keysArr1.length === 0 && keysArr2.length === 0) return true;
        /* eslint-disable-next-line */ else {
            return !keysArr1.some((key) => obj1[key] != obj2[key]);
        }
    }
}
