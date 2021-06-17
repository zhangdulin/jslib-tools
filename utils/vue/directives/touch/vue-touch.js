import Vue from 'vue'
import TouchCls from './touch-cls'

// 指令 事件名称    描述
//  v-tap  点击事件
//  v-swipe    滑动事件
//  v-swipeleft    左滑事件
//  v-swiperight   右滑事件
//  v-swipedown    下滑事件
//  v-swipeup  上滑事件
//  v-longtap  长按事件

// 点击事件

Vue.directive('tap', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'tap')
    touch.initialize()
  }
})
 // 长按事件
  Vue.directive('swipe', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipe')
    touch.initialize()
  }
})
 // 左滑
Vue.directive('swipeleft', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipeleft')
    touch.initialize()
  }
})
 // 右滑
Vue.directive('swiperight', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swiperight')
    touch.initialize()
  }
})
 // 下滑
Vue.directive('swipedown', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipedown')
    touch.initialize()
  }
})
 // 上滑
Vue.directive('swipeup', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipeup')
    touch.initialize()
  }
})
 // 长按事件
Vue.directive('longtap', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'longtap')
    touch.initialize()
  }
})