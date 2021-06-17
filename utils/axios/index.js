/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-15 11:34:22
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-15 11:40:54
 * @Description: 
 */
import service from './creatAxios'
import {
  postData,
  getData
} from './creatMethod'

// web网关
const btweb = service({});
// h5网关
const h5web = service({
  baseURL: '',
  // timeout: 1000 * 6,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
});

// post
export const post = (url, params, loading, conf = {}) => {
  return postData(url, params, loading, conf, btweb)
}
// get
export const get = (url, params, loading, conf = {}) => {
  return getData(url, params, loading, conf, btweb)
}
// post
export const h5post = (url, params, loading, conf = {}) => {
  return postData(url, params, loading, conf, h5web)
}
// get
export const h5get = (url, params, loading, conf = {}) => {
  return getData(url, params, loading, conf, h5web)
}