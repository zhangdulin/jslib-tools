/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 17:44:08
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 15:05:38
 * @Description: 
 */
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export const debounce = function (func, wait, immediate) {
  let timeout

  return function () {
    const context = this
    const args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export const throttle = function (func, wait, type) {
  if (type === 1) {
    // eslint-disable-next-line no-unused-vars
    const previous = 0
  } else if (type === 2) {
    // eslint-disable-next-line no-unused-varsutils
    // eslint-disable-next-line no-unused-vars
    let timeout
  }
  return function () {
    const context = this
    const args = arguments
    if (type === 1) {
      const now = Date.now()

      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

/**
 * @description: 延迟执行函数
 * @param {*number|string} ms
 * @param {*Function} callback
 * @return {* void}
 */
export const sleepAction = (ms, callback) => {
  setTimeout(() => { callback() }, ms);
}


/**
 * sync
 *
 * @description 睡眠
 * @param {*number|string} ms
 * @returns {Promise<void>}
 */
export function sleepSync(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve() }, ms);
  })
}