/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-25 11:30:34
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-09 18:09:26
 * @Description: 
 */

import { isFunc } from '../../judgement/index'

/**
 * @description: 数组转对象
 * @param {string} key
 * @param {any} arr
 * @return {*object}
 */
export function arrayToObject(key, arr) {
    const mapping = {};
    arr.forEach((item) => {
        if (item[key]) {
            mapping[item[key]] = item
        }
    })
    return mapping
}

/**
 * 引用数组位移，性能优化
 * @param {<any[]>} array 
 * @param {number} from 
 * @param {number} to 
 */
export function arrayMoveMutate(array, from, to) {
    const startIndex = from < 0 ? array.length + from : from;

    if (startIndex >= 0 && startIndex < array.length) {
        const endIndex = to < 0 ? array.length + to : to;

        const [item] = array.splice(from, 1);
        array.splice(endIndex, 0, item);
    }
}

/**
 * 数组位移
 * @param {<any[]>} array 
 * @param {number} from 
 * @param {number} to 
 * @returns 
 * @example
    ```
        const { arrayMove } = require('@alrale/common-lib');

        const input = ['a', 'b', 'c'];

        const array1 = arrayMove(input, 1, 2);
        console.log(array1);
        //=> ['a', 'c', 'b']

        const array2 = arrayMove(input, -1, 0);
        console.log(array2);
        //=> ['c', 'a', 'b']

        const array3 = arrayMove(input, -2, -3);
        console.log(array3);
        //=> ['b', 'a', 'c']
    ```
 */
export function arrayMove(array, from, to) {
    const _array = [...array];
    arrayMoveMutate(_array, from, to);
    return _array;
}


/**
     * 按条件产生数组 arr(5,2,2) => [2,4,6,8,10]
     * eg:按1-10项产生斐波那契数列 =>arr(10, function (value, i, list) { return i > 1 ? list[i - 1] + list[i - 2] : 1; })
     * @param {number} length 要产生的数组长度
     * @param {number} value 数组项的初始值
     * @param {number} step 递增值或处理函数(当前值,索引,当前产生的数组)
     */
export function arrFibonacci(length, value, step) {
    if (isFunc(value)) {
        step = value;
        value = 0;
    }
    if (value == undefined) value = 0;
    if (step == undefined) step = 1;

    var list = [], i = 0;

    if (isFunc(step)) {
        while (i < length) {
            value = step(value, i, list);
            list.push(value);
            i++;
        }
    } else {
        while (i < length) {
            list.push(value);
            value += step;
            i++;
        }
    }

    return list;
}

/**
 * 根据指定的键或索引抽取数组项的值
 * eg:vals([{id:1},{id:2}], "id")  =>  [1,2]
 * eg:vals([[1,"a"],[2,"b"]], 1)   =>  ["a","b"]
 * @param {Array} list 对象数组
 * @param {string} prop 要抽取的属性
 * @param {boolean} skipUndefined 是否跳过值不存在的项,默认为true
 */
export function arrVals(list, prop, skipUndefined) {
    if (!list) return [];

    skipUndefined = skipUndefined !== false;

    var len = list.length,
        i = 0,
        item,
        tmp = [];

    for (; i < len; i++) {
        item = list[i];
        if (item && item[prop] != undefined) {
            tmp.push(item[prop]);
        } else if (!skipUndefined) {
            tmp.push(undefined);
        }
    }

    return tmp;
}