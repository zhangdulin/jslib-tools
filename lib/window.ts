/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-24 14:20:26
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 14:22:09
 * @Description:  window 对象
 */


/**
 * 获取全局对象
 */
export function globalLib(): any {
    const _secret: string = '__COMMON_LIB__';
    const _g: any = window || global
    if (_g[_secret]) return _g[_secret]
    return _g[_secret] = {}
}

/**
 * set 全局对象
 * @param {string} key 
 * @param {any} value 
 * @param {boolean} cover 
 */
export function setGlobal(key: string, value: any, cover: boolean = true): boolean {
    const _g: any = globalLib();
    if (!cover && _g[key]) return false
    _g[key] = value
    return true
}

/**
 * get 全局对象
 * @param {string} key 
 */
export function getGlobal(key: string): any {
    const _g: any = globalLib();
    return _g[key]
}

/**
 * 删除 对象数据
 * @param {string} key 
 */
export function removeGlobalItem(key: string): boolean {
    const _g: any = globalLib();
    const bool: boolean = delete _g[key];
    return bool;
}