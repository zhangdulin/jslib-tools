// import { Toast } from 'vant'

/*
 *@Description: 封装get方法和post方法
 *@MethodAuthor:  dulinyu
*/

// 提示文案
const errorTip = {
  'http': '网络异常',
  'loading': '信息加载中...'
}
// loading 时长
var errorInfo = {}
// 记录次数
let loadingCount = 0

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {function} httpMethod [axios] 
 */
export function getData (url, params, loading = true, conf = {}, httpMethod) {
  /**
   * loading 默认开启
   * false关闭
   */
  // loading ? Toast.loading({ className: errorTip.loadingClass, duration: 0, message: errorTip.loading }) : ''
  var urlkey = url.replace(/\//g, '')
  errorInfo[urlkey] = 0

  return new Promise((resolve, reject) => {
    const config = Object.assign({}, conf)
    httpMethod
      .get(url, {
        params: params,
        headersConf: config.headersConf
      })
      .then(res => {
        if (res && res.data && res.data.code !== '000000') {
          errorInfo[urlkey] = 2000
        }
        resolve(res.data)
      })
      .catch(err => {
        errorInfo[urlkey] = 2000
        // Toast.fail({ className: errorTip.loadingClass, duration: 0, message: errorTip.http })
        reject(err)
      })
      .finally(() => {
        timeoutrequest && clearTimeout(timeoutrequest)
        var timeoutrequest = setTimeout(() => {
          // Toast.clear()
        }, errorInfo[urlkey] || 0)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数] 
 * @param {function} httpMethod [axios] 
 */
export function postData (url, params, loading = true, conf = {}, httpMethod) {
  /**
   * loading 默认开启
   * false 关闭
   */
  loadingCount++
  // loading ? Toast.loading({ className: errorTip.loadingClass, duration: 0, message: errorTip.loading }) : ''
  return new Promise((resolve, reject) => {
    const config = Object.assign({}, conf)
    httpMethod
      .post(url, params, config)
      .then(res => {
        const status = res.data.code == '000000'
        console[status ? 'groupCollapsed' : 'group'](
          `%c POST %c ${status ? 'SUCCESS' : 'FAILED'} %c ${url}`,
          'padding:2px;background:green;color:white;font-size:10px;border-right:1px solid white;',
          `padding:2px;color:white;font-size:10px;background:${status ? 'green;' : 'red;'}`,
          ''
        )
        console.log('url', url)
        console.log('params: ', { ...params })
        console.log('response: ', { ...res.data })
        console.groupEnd()

        resolve(res.data)
      })
      .catch(err => {
        console.group(
          `%c POST %c FAILED %c ${url}`,
          'padding:2px;background:green;color:white;font-size:10px;',
          'padding:2px;color:white;font-size:10px;background:red;',
          ''
        )
        console.log('url', url)
        console.log('params: ', { ...params })
        console.log('error: ', err)
        console.groupEnd()

        // Toast.fail({ className: errorTip.loadingClass, duration: 0, message: errorTip.http })
        reject(err)
      })
      .finally(() => {
        loadingCount--
        if (loadingCount <= 0) {
          timeoutrequest && clearTimeout(timeoutrequest)
          var timeoutrequest = setTimeout(() => {
            // Toast.clear()
          }, 2000)
        }
      })
  })
}
