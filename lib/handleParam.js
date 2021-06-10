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
 export function handleParam(obj = {}) {
  if (JSON.stringify(obj) === "{}") return {};
  let res = {};
  let arr = Object.keys(obj);
  arr.forEach(item => {
    if (obj[item] !== null) {
      res[item] = obj[item];
    }
  });
  return res;
}
