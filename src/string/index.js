/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-18 10:15:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-18 10:15:41
 * @Description: 
 */
/*
 *@Description: 字符串空判断
 *@param : data
 *@returns:boolean
*/
export const validatorEmpty = str => {
    if (str == 'undefined' || !str || !/[^\s]/.test(str)) {
      return true;
    } else {
      return false;
    }
  }
  