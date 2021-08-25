/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 17:43:38
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-08-24 17:40:25
 * @Description: 
 */

import { isFunc, getType, compareSize } from '../judgement/index'

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
 * 给原型方法或属性添加别名 eg:alias(Array,"forEach","each");
 * @param {object} obj 对象
 * @param {string|object} name 属性名称或对象 eg: 'forEach' | {forEach:'each'}
 * @param {string} aliasName 别名
 */
export function alias(obj, name, aliasName) {
    if (!obj || !obj.prototype) return;

    var prototype = obj.prototype;

    if (typeof name == "string") {
        prototype[aliasName] = prototype[name];
    } else {
        for (var key in name) {
            if (has.call(name, key) && has.call(prototype, key)) prototype[name[key]] = prototype[key];
        }
    }

    return obj;
}

/**
* 将源对象(source)的所有可枚举且目标对象(target)不存在的属性, 复制到目标对象
* @param {object} target 目标对象
* @param {object} source 源对象
* @param {boolean} forced 是否强制复制, 为true时将会覆盖目标对象同名属性, 默认为false
*/
export function extend(target, source, forced) {
    if (!target || !source) return target;

    for (var key in source) {
        if (key == undefined || !has.call(source, key)) continue;

        if (forced || target[key] === undefined) target[key] = source[key];
    }
    return target;
}

 /**
 * 将数组或类数组转换为键值对 eg: ['a','b'] => {a:0,b:1}
 * @param {Array} list 要转换的数组
 * @param {object|function} fv 默认值或处理函数(value,i) => [key,value]
 * @param {boolean} ignoreCase 是否忽略大小写, 为true时将统一使用小写, 默认为false
 */
 export function toMap(list, fv, ignoreCase) {
    if (!list) return;

    var map = {},
        isFn = isFunc(fv),
        hasValue = fv !== undefined;

    for (var i = 0, len = list.length; i < len; i++) {
        var key = list[i], value;
        if (key == undefined) continue;

        if (isFn) {
            var kv = fv.call(list, key, i);
            if (!kv) continue;

            key = kv[0];
            value = kv[1];
        } else {
            value = hasValue ? fv : i;
        }

        map[ignoreCase ? key.toLowerCase() : key] = value;
    }

    return map;
}

/**
 * 将对象数组转换为键值对 eg: [{name:'a',value:1},{name:'b',value:2}] => {a:1,b:2}
 * @param {array} list 要转换的对象数组
 * @param {string} propKey 对象中作为键的属性 eg: name
 * @param {string|boolean} propValue 对象中作为值的属性, 为true时将给对象增加index属性, 为空时将整个对象作为值
 */
function toObjectMap(list, propKey, propValue) {
    if (!list) return;

    var map = {}, isBuildIndex = false;

    if (propValue === true) {
        isBuildIndex = propValue;
        propValue = undefined;
    }

    for (var i = 0, len = list.length; i < len; i++) {
        var obj = list[i];
        if (!obj || typeof obj != "object") continue;

        if (isBuildIndex) obj.index = i;

        map[obj[propKey]] = propValue ? obj[propValue] : obj;
    }

    return map;
}

/**
 * 将目标对象中和源对象值不同的数据作为键值对返回
 * @param {object} target 目标对象
 * @param {object} source 源对象
 * @param {Array.<string>} skipProps 要忽略比较的属性数组
 * @param {string} skipPrefix 要忽略的属性前缀
 */
function getChangedData(target, source, skipProps, skipPrefix) {
    if (!target) return undefined;

    var map_skip_prop = skipProps ? toMap(skipProps, true) : {},
        data_changed = {},
        has_changed = false;

    for (var key in target) {
        if (!key || !has.call(target, key) || map_skip_prop[key] || (skipPrefix && key.indexOf(skipPrefix) == 0) || target[key] == source[key]) continue;
        data_changed[key] = target[key];
        has_changed = true;
    }

    return has_changed ? data_changed : undefined;
}


/**
 * 目标和对象组合转换成数组 target{name:'1',age:'58'} formattedObject{name:'你好',age:'年龄'} => [{label:'你好':,value:'1'},{label:'年龄':,value:'58'}]
 * @param target 目标对象
 * @param formattedObject 格式化对象
 * @param options K/V
 */
 function objectConversionToList(target, formattedObject,options) {
    let _options;
    if (options) _options = options
    else _options = { label: 'label', value: 'value' }
    const returnList = [];
    const { label, value } = _options
    // 判断target类型
    if (getType(target) === 'object') {
        for (const key in formattedObject) {
            if (Object.prototype.hasOwnProperty.call(formattedObject, key)) {
                const getLabel = formattedObject[key];
                const getValue = target[key]
                returnList.push({
                    [label]: getLabel,
                    [value]: getValue
                })
            }
        }
    }
    return returnList
}

/**
* 根据对象key排序
* @param {object} map 排序对象
* @param {boolean} isKeyUpSort 排序方式 默认顺序
*/
export function sortMapByKey(map, isKeyUpSort=true) {
    const keys =[];
    const isMap = getType(map) === 'map';
    if (isMap) {
      map.forEach((_, key) => {
        keys.push(key);
      });
    } else {
      for (const key in map) {
        if (Object.prototype.hasOwnProperty.call(map, key)) {
          keys.push(key)
        }
      }
    }
    if (isKeyUpSort) {
      keys.sort((key1, key2) => compareSize(key2, key1));
    } else {
      keys.sort((key1, key2) => compareSize(key1, key2));
    }
    let newMap;
    if (isMap) {
      newMap = new Map();
      keys.forEach(key => {
        newMap.set(key, map.get(key));
      });
    } else {
      newMap = {}
      keys.forEach(key => {
        newMap[key] = map[key]
      });
    }
    return newMap;
  }
  
  /**
  * 对象to 对象数组
  * @param {object} target 
  */
  export function objectToArray(target) {
    const arr =  [];
    if (getType(target) === 'object') {
      for (const key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          const item = target[key];
          arr.push({ [key]: item })
        }
      }
    } else if (getType(target) === 'map') {
      target.forEach((value, key) => {
        arr.push({ [key]: value })
      })
    }
    return arr;
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
    },
    alias,
    extend,
    toMap, 
    toObjectMap,
    objectToArray,
    getChangedData,
    objectConversionToList,
    sortMapByKey
}
