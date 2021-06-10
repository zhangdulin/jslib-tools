/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:14:20
 * @Description: 
 */
/**
 * 获取默认头像
 * @param {*} userId
 */
export function getDefaultAvatar({ userId, imageDomain } = { userId: 0, imageDomain: "" }) {
  if (!imageDomain) return "";
  return imageDomain + "/photo/user_header" + ((userId || 0) % 10) + ".png";
}
