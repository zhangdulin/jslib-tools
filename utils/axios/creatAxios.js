import axios from 'axios'

// 环境变量
// 环境变量 获取本地的环境变量
window.env = Object.assign({}, process.env, window.env || {})

// 防止重复请求
// 将正在请求的地址存储起来
const pending = []
const CancelToken = axios.CancelToken
/**
 * config 请求的axios的配置信息
 * c框架中用于取消的回调，在这也会用来判断当前是请求阶段还是返回阶段
 */
 const removePending = (config, c) => {
  const { url, method } = config;
  const urlArray = url.split('/');
  const urlLimit = `${urlArray[urlArray.length - 2]}${urlArray[urlArray.length - 1]}`;
  const index = pending.findIndex(i => i === `${urlLimit}&${method}`);
  // 判断要请求的的地址有没有在pending中
  if (index > -1) {
      c ? c('数据请求中……') : pending.splice(index, 1);
  } else {
      c && pending.push(`${urlLimit}&${method}`);
  }
};

// _axios默认配置 根据环境不同引入不同api地址 默认车机网关
const o = () => ({
  baseURL: window.env.NODE_ENV === 'development' ? window.env.VUE_APP_BASE_URL : window.env.VUE_APP_BASE_API, // '/api'
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 创建 _axios
const service = function (options = {}) {
  const _axios = axios.create(Object.assign({}, o(), options))
  // 请求拦截
  _axios.interceptors.request.use(reqSuccess, reqError);
  // 响应拦截
  _axios.interceptors.response.use(resSuccess, resError);
  return _axios
}

// 请求拦截 成功
function reqSuccess(config) {
  // 在发送请求之前做些什么 验证token之类的
  // 扩展header
  let headersConf = config.headersConf || {}
  config.headers = Object.assign({}, config.headers, headersConf)

  if (config.method == 'post') {
    const {
      Headtype
    } = config.headers || {};
    if (Headtype == 'file') {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    }
  }

  // 请求之前判断并添加到pending
  config.cancelToken = new CancelToken(c => {
    removePending(config, c)
  })
  return config
}
// 请求拦截 错误
function reqError(error) {
  // 对请求错误做些什么
  return Promise.error(error)
}

// 响应拦截 成功
function resSuccess(response) {
  // endLoading();
  // 对响应数据做点什么
  // 请求回来后删除pending存储
  removePending(response.config)
  if (response.status !== 200) {

    errorAction()

    return Promise.reject(response)
  } else {
    const code = response.data && response.data.code
    if (code != '000000') {
      errorAction()
    }

    return response
    // return res;
  }
  // return response
}
// 响应拦截 错误
function resError(error) {
  if (error && error.response) {
    // 请求出错，根据http状态码做相应处理
    switch (error.response.status) {
      case 400:
        console.log('service 400 操作失败！')
        Toast.fail('service 400 操作失败！')
        break
      case 404:
        // router.push({name:'404'})
        console.log('service 404 请求不存在！')
        Toast.fail('service 404 请求不存在！')
        break
      case 408:
        // router.push({ name: '500', query: { code: 408 } })
        console.log('service 408 请求超时')
        Toast.fail('service 408 请求超时')
        break
      case 500:
        // router.push({ name: '500', query: { code: 500 } })
        console.log('service 500 内部服务器错误')
        Toast.fail('service 500 内部服务器错误')
        break
    }
  }

  // 对响应错误做点什么
  // 请求回来后删除pending存储
  error.config && removePending(error.config)

  errorAction()

  return Promise.reject(error)
}

// 错误后操作
function errorAction() {
  // store && store.dispatch('app/setErrorFlag', true)
}

export default service
