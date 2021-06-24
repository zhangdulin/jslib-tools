/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-21 19:59:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-21 20:01:19
 * @Description: 
 */

// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Box from '@/components/Box'

const UI = {
  Box
}

const install = function(Vue, opts = {}) {
  Object.keys(UI).forEach((key) => {
    Vue.component(key, UI[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(UI, { install })

// 在main.js引用
// import UI from '@/components'
// Vue.use(UI)