/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-18 09:14:05
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-18 10:11:31
 * @Description: 
 */

/**
 * @description: 转换文件大小 B=>KB 等
 * @param {*} bytes B
 * @return {String} String KB 等
 */
export const b2size = (bytes: any): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const result =
    parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  return result
}