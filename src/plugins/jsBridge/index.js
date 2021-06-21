/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-11 11:00:48
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 18:07:04
 * @Description: 
 */

//JS注册事件监听
var initflag  = false

function connectWebViewJavascriptBridge(callback) {
 if (window.WebViewJavascriptBridge) {
     callback(WebViewJavascriptBridge)
 } else {
     document.addEventListener(
         'WebViewJavascriptBridgeReady'
         , function() {
             callback(WebViewJavascriptBridge)
         },
         false
     );
 }
}

//注册回调函数，第一次连接时调用 初始化函数
// connectWebViewJavascriptBridge(function(bridge) {
//   //初始化
//  bridge.init(function(message, responseCallback) {
//    initflag = true
//      var data = {
//          'Javascript Responds': 'Wee!'
//      };
//      // alert("jasdashjd");
//      responseCallback(data);
//  });
// })

 /**
  * @description: jsbridge callHandler
  * @param {*} callHandlerData 
  * @param {*} name n请求的方法
  * @param {*} data 请求时传的参数
  * @return {*} function
  */
 export function callHandler (callHandlerData={name:'', data:{}}) {
   let _resolve
   let _reject
   // 生成promise对象，保留resolve，reject
   const readyPromise = new Promise((resolve, reject) => {
     _resolve = resolve
     _reject = reject
   })
   connectWebViewJavascriptBridge(function(bridge) {
    //初始化
    if (!initflag) { 
     bridge.init(function(message, responseCallback) {
     initflag = true
       var data = {
           'Javascript Responds': 'Wee!'
       };
       responseCallback(data);
      });
      try {
        bridge.callHandler(callHandlerData.name, callHandlerData.data, (response) => {
          // 调用成功，使用保留的resolve改变返回的promise状态
          _resolve(response)
         })
       } catch (e) {
         // 调用成功，使用保留的reject改变返回的promise状态
         _reject(e)
        }
   } else {
     try {
       bridge.callHandler(callHandlerData.name, callHandlerData.data, (response) => {
         // 调用成功，使用保留的resolve改变返回的promise状态
         _resolve(response)
       })
     } catch (e) {
       // 调用成功，使用保留的reject改变返回的promise状态
       _reject(e)
     }
   }
  })
  
   return readyPromise
 }


 /*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-11 11:00:48
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-11 14:05:50
 * @Description: 
 */
// 注册方法获取WebViewJavascriptBridge对象
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  // 兼容安卓
  document.addEventListener(
    'WebViewJavascriptBridgeReady',
    () => callback(window.WebViewJavascriptBridge),
    false
  )
  // 兼容ios
  window.WVJBCallbacks = [callback]
  var WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function() {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
//  获取WebViewJavascriptBridge对象
function getBirdge() {
  return new Promise(resolve => {
    if (window.WebViewJavascriptBridge) {
      return resolve(window.WebViewJavascriptBridge)
    }
    setupWebViewJavascriptBridge(bridge => {
      // 初始化
      bridge.init(function(message, responseCallback) {
        var data = {
            'Javascript Responds': 'Wee!'
        };
        responseCallback(data);
      });

      resolve(bridge)
    })
  })
}

// 重写之后的birdge
/**
* @description: jsbridge callHandler
* @param {*} callHandlerData 
* @param {*} name n请求的方法
* @param {*} data 请求时传的参数
* @return {*} function
*/
export default {
  ctx: null, // WebViewJavascriptBridge
  callHandler(callHandlerData={name:'', data:{}}) {
    return new Promise(async resolve => {
      if (!this.ctx) {
        this.ctx = await getBirdge()
      }
      this.ctx.callHandler(callHandlerData.name, callHandlerData.data, res => resolve(res))
    })
  },
  registerHandler(jsHandlerName) {
    // 重写事件注册方法
    this.ctx.registerHandler(jsHandlerName, (data, callback) => {
      if (callback) {
        callback(
          `返回一个字符串，告诉ObjC：我已收到数据${JSON.stringify(data)}`
        )
      }
    })
  }
}
