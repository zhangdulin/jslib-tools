/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-08 09:50:14
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-28 14:18:10
 * @Description: 
 */

import { getType } from '../judgement/index'

var slice = Array.prototype.slice;

/**
 * 转为数组
 * @param {Array|NodeList} obj 数组或类数组
 * @param {number} from 开始索引,默认为0
 */
export function toArray(obj, from) {
  var tmp = [];

  for (var i = from || 0, len = obj.length; i < len; i++) {
    tmp.push(obj[i]);
  }

  return tmp;
}

//将 NodeList 转为 Array
var makeArrayNode = (function () {
  try {
    slice.call(document.documentElement.childNodes);

    return function (obj, from) {
      return slice.call(obj, from);
    }
  } catch (e) {
    return toArray;
  }
})();

/**
 * 将类数组对象转为数组,若对象不存在,则返回空数组
 * @param {Array|arguments|NodeList} obj 数组或类数组
 * @param {number} from 开始索引,默认为0
 */
export function makeArray(obj, from) {
  if (obj == undefined) return [];

  switch (getType(obj)) {
    case "array": return from ? obj.slice(from) : obj;
    case "list": return makeArrayNode(obj, from);
    case "arguments": return slice.call(obj, from);
  }

  return [obj];
}

//  var arr = [
//   {id: 1, name: '部门1', pid: 0},
//   {id: 2, name: '部门2', pid: 1},
//   {id: 3, name: '部门3', pid: 1},
//   {id: 4, name: '部门4', pid: 3},
//   {id: 5, name: '部门5', pid: 4},
// ]
/**
 * @description: 扁平=>tree 递归查找，获取children
 * @param {*} data 要处理对象
 * @param {*} result 返回数组 
 * @param {*} pid 父id
 * @return {array}
 */
var getChildren = function (data, result, pid) {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
}

/**
* 转换方法
*/
const arrayToTree = function (data, pid) {
  const result = [];
  getChildren(data, result, pid)
  return result;
}


function arrayToTree2(items) {
  const result = [];   // 存放结果集
  const itemMap = {};  //
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem = itemMap[id];

    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }

  }
  return result;
}

function arrayToTree3(data) {
  const link = new Map();
  function getChild(pid) {
    if (!link.get(pid)) link.set(pid, []);
    return link.get(pid);
  }
  for (let i = 0; i < data.length; i++) {
    const one = data[i];
    getChild(one.pid).push({ ...one, children: getChild(one.id) });
  }
  return link.get(0);
}


function arrayToTree4(data, pid) {
  let newArray = []
  data.forEach(iterator => {
    if (iterator.pid == pid) {
      if (iterator.children) {
        iterator.children.push(arrayToTree4(data, iterator.id))
      } else {
        iterator.children = arrayToTree4(data, iterator.id)
      }
      newArray.push(iterator)
    }
  });
  return newArray
}